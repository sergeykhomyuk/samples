namespace web.Services
{
    using System;
    using System.Collections;
    using System.Collections.Generic;

    using web.Models;
    using web.Models.BuildStatus;
    using web.Models.Issue;
    using web.Models.MetricsStatus;
    using web.Models.TestStatus;

    public abstract class ItemBuilder : IEnumerator<Item>
    {
        private const double FailurePossibility = 0.2;

        private bool hasErrors;

        private readonly int itemId;

        private int buildStep;

        /// <summary>
        /// Initializes a new instance of the <see cref="T:System.Object"/> class.
        /// </summary>
        protected ItemBuilder(int itemId)
        {
            this.itemId = itemId;
            this.hasErrors = false;
            this.buildStep = 0;
            this.BuildSteps = new List<Action>
                {
                    this.CreateStep,
                    this.StartMetricsStep,
                    this.CompleteMetricsStep,
                    this.StartBuild,
                    this.CompleteBuild,
                    this.StartUnitTest,
                    this.CompleteUnitTest,
                    this.StartFunctionalTest,
                    this.CompleteFunctionalTest
                };
        }

        protected bool CheckFailurePossibility()
        {
            var random = new Random();
            var value = random.NextDouble();
            var hasFailed = value <= FailurePossibility;
            return hasFailed;
        }

        protected State CheckNextState()
        {
            var hasFailed = CheckFailurePossibility();
            if (hasFailed)
            {
                hasErrors = true;
                return State.Failed;
            }
            else
            {
                return State.Succeeded;
            }
        }

        protected Item Item { get; set; }

        protected List<Action> BuildSteps { get; private set; }

        protected virtual void CreateStep()
        {
            this.Item.Id = this.itemId;
            this.Item.CreateDate = DateTime.Now;
            this.Item.State = State.Pending;            
            this.Item.Metrics = new MetricsStatus { State = State.Pending };
            this.Item.Build = new BuildStatus { State = State.Pending };
            this.Item.UnitTest = new TestStatus { State = State.Pending };
            this.Item.FunctionalTest = new TestStatus { State = State.Pending };
        }

        protected virtual void StartMetricsStep()
        {
            Item.State = State.Running;
            this.Item.TimeStarted = DateTime.Now;
            Item.Metrics.State = State.Running;
        }

        protected virtual void CompleteMetricsStep()
        {
            var state = this.CheckNextState();

            var random = new Random();
            if (state == State.Failed)
            {
                this.Item.Metrics = new MetricsStatus
                    {
                        State = State.Failed,
                        Test = new MetricsScore { State = MetricsScoreState.Increased, Value = random.Next(100) },
                        Maintability = new MetricsScore { State = MetricsScoreState.Reduced, Value = random.Next(100) },
                        Security = new MetricsScore { State = MetricsScoreState.NotChanged, Value = random.Next(100) },
                        Worksmanship = new MetricsScore { State = MetricsScoreState.NotChanged, Value = random.Next(100) },
                    };
            }
            else
            {
                this.Item.Metrics = new MetricsStatus
                    {
                        State = State.Succeeded,
                        Test = new MetricsScore { State = MetricsScoreState.Increased, Value = random.Next(100) },
                        Maintability = new MetricsScore { State = MetricsScoreState.Increased, Value = random.Next(100) },
                        Security = new MetricsScore { State = MetricsScoreState.NotChanged, Value = random.Next(100) },
                        Worksmanship = new MetricsScore { State = MetricsScoreState.NotChanged, Value = random.Next(100) },
                    };
            }
        }

        protected virtual void StartBuild()
        {
            Item.Build.State = State.Running;
        }

        protected virtual void CompleteBuild()
        {
            var state = this.CheckNextState();

            if (state == State.Failed)
            {
                this.Item.Build = new BuildStatus
                    {
                        State = State.Failed,
                        CompletedTime = DateTime.Now,
                        DebugState = BuildTargetState.Failed,
                        ReleaseState = BuildTargetState.Succeeded
                    };
            }
            else
            {
                this.Item.Build = new BuildStatus
                    {
                        State = State.Succeeded,
                        CompletedTime = DateTime.Now,
                        DebugState = BuildTargetState.Succeeded,
                        ReleaseState = BuildTargetState.Succeeded
                    };
            }            
        }

        protected virtual void StartUnitTest()
        {
            Item.UnitTest.State = State.Running;
        }

        protected virtual void CompleteUnitTest()
        {
            var state = this.CheckNextState();

            var random = new Random();
            if (state == State.Failed)
            {
                this.Item.UnitTest = new TestStatus
                    {
                        State = State.Failed,
                        codeCoveragePercent = random.Next(100),
                        passedCount = 0,
                        failedCount = random.Next(150)
                    };
            }
            else
            {
                this.Item.UnitTest = new TestStatus
                    {
                        State = State.Succeeded,
                        codeCoveragePercent = random.Next(100),
                        passedCount = random.Next(100),
                        failedCount = random.Next(50)
                    };
            }
        }


        protected virtual void StartFunctionalTest()
        {
            Item.FunctionalTest.State = State.Running;
        }

        protected virtual void CompleteFunctionalTest()
        {
            var state = this.CheckNextState();

            var random = new Random();
            if (state == State.Failed)
            {
                this.Item.FunctionalTest = new TestStatus
                    {
                        State = State.Failed,
                        codeCoveragePercent = random.Next(100),
                        passedCount = 0,
                        failedCount = random.Next(1500)
                    };
            }
            else
            {
                this.Item.FunctionalTest = new TestStatus
                    {
                        State = State.Succeeded,
                        codeCoveragePercent = random.Next(100),
                        passedCount = random.Next(1000),
                        failedCount = random.Next(500)
                    };
            }

            this.Complete();
        }

        protected virtual void Complete()
        {
            this.Item.State = this.hasErrors ? State.Failed : State.Succeeded;
            if (this.hasErrors)
            {
                this.Item.Issue = new Issue { Type = IssueType.MetricsReduction };
            }
        }

        /// <summary>
        /// Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
        /// </summary>
        public void Dispose()
        {
            this.buildStep = 0;
        }

        /// <summary>
        /// Advances the enumerator to the next element of the collection.
        /// </summary>
        /// <returns>
        /// true if the enumerator was successfully advanced to the next element; false if the enumerator has passed the end of the collection.
        /// </returns>
        /// <exception cref="T:System.InvalidOperationException">The collection was modified after the enumerator was created. </exception>
        public bool MoveNext()
        {
            var step = this.BuildSteps[this.buildStep];
            step();
            this.buildStep++;

            return this.buildStep < this.BuildSteps.Count;
        }

        /// <summary>
        /// Sets the enumerator to its initial position, which is before the first element in the collection.
        /// </summary>
        /// <exception cref="T:System.InvalidOperationException">The collection was modified after the enumerator was created. </exception>
        public void Reset()
        {
            this.buildStep = 0;
        }

        /// <summary>
        /// Gets the element in the collection at the current position of the enumerator.
        /// </summary>
        /// <returns>
        /// The element in the collection at the current position of the enumerator.
        /// </returns>
        public Item Current
        {
            get
            {
                return this.Item;
            }
        }

        /// <summary>
        /// Gets the current element in the collection.
        /// </summary>
        /// <returns>
        /// The current element in the collection.
        /// </returns>
        object IEnumerator.Current
        {
            get
            {
                return Current;
            }
        }
    }
}