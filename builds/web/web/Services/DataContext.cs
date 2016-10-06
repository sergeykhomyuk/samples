namespace web.Services
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using web.Models;
    using web.Models.BuildStatus;
    using web.Models.Issue;
    using web.Models.MetricsStatus;
    using web.Models.TestStatus;

    public static class DataContext
    {
        private static int id;
        private static readonly List<Item> items;

        private static ItemBuilder itemBuilder;

        /// <summary>
        /// Initializes a new instance of the <see cref="T:System.Object"/> class.
        /// </summary>
        static DataContext()
        {
            id = 0;
            items = new List<Item>();
        }

        public static IEnumerable<Item> GenerateItems()
        {
            if (items.Count == 10)
            {
                items.Clear();
                itemBuilder = null;
            }

            if (items.Count == 0)
            {
                items.AddRange(GenerateInitialItems());
            } 
            else
            {
                if (itemBuilder == null)
                {
                    itemBuilder = CreateItemBuilder();
                    items.Add(itemBuilder.Current);
                }

                var isCompleted = !itemBuilder.MoveNext();
                if (isCompleted)
                {
                    itemBuilder = null;
                }
            }

            return items.Where(item => item != null).Distinct(new ItemsEqualityCompararer()).ToArray();
        }

        public static Issue GenerateIssue(int id)
        {
            return new Issue
                {
                    ItemId = id,
                    Type = IssueType.MetricsReduction,
                    Name = "Maintability has reduced from 64 to 53 points.",
                    Description = @"Overall Build Process
Update Build Number
Run On Agent (reserved build agent Hosted Build Agent)
Create Workspace
Get Workspace
Create Label
Compile, Test, and Associate Changesets and Work Items
Compile and Test
The thumbprint for the current certificate used to connect is E957AA34BF542F06C34200412549877826C5EBF7.
Fetch Azure Web Site Publish Profile
Run MSBuild for Project
Built $/Solution/Main/Project.sln for default targets.
Built $/Solution/Main/Project/Project.csproj for default targets.
Built $/Solution/Main/Project.Entities/Project.Entities.csproj for default targets.
Built $/Solution/Main/Project.Infrastructure/Project.Infrastructure.csproj for default targets.
Built $/Solution/Main/Project.Mail/Project.Mail.csproj for default targets.
Built $/Solution/Main/Project.Services/Project.Services.csproj for default targets.
Built $/Solution/Main/Project.Entities/Project.Entities.csproj for default targets.
Built $/Solution/Main/Project.Infrastructure/Project.Infrastructure.csproj for default targets.
Built $/Solution/Main/Project.Mail/Project.Mail.csproj for default targets.
Built $/Solution/Main/Project.Storage/Project.Storage.csproj for default targets.
Built $/Solution/Main/Project.Entities/Project.Entities.csproj for default targets.
Built $/Solution/Main/Project.Infrastructure/Project.Infrastructure.csproj for default targets.
C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Microsoft.Common.targets (1605): Found conflicts between different versions of the same dependent assembly.
Controllers\AccountController.cs (93): The variable 'ex' is declared but never used
Controllers\api\CoursePictureController.cs (46): The variable 'ex' is declared but never used
Controllers\api\CoursePictureController.cs (87): The variable 'ex' is declared but never used
Built $/Solution/Main/Project.Entities/Project.Entities.csproj for default targets.
Built $/Solution/Main/Project.Infrastructure/Project.Infrastructure.csproj for default targets.
Built $/Solution/Main/Project.Mail/Project.Mail.csproj for default targets.
Built $/Solution/Main/Project.Storage/Project.Storage.csproj for default targets.
Built $/Solution/Main/Project.Services/Project.Services.csproj for default targets.
Built $/Solution/Main/Project.Tests/Project.Tests.csproj for default targets.
Built $/Solution/Main/Project/Project.csproj for default targets.
C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Microsoft.Common.targets (1605): Found conflicts between different versions of the same dependent assembly.
Built $/Solution/Main/Project.Database/Project.Database.sqlproj for default targets.
MSBuild Log File
Run Visual Studio Test Runner for Test Sources
No test found. Make sure that installed test discoverers & executors, platform & framework version settings are appropriate and try again.
Publish Output
MSDeploy
Write Custom Deployment Summary
Set the current build number in the web site portal.
Associate Changesets and Work Items
Get Impacted Tests, Index Sources and Publish Symbols
Get Impacted Tests
Index Sources
Drop Files to Drop Location"
                };            
        }

        private static int GenerateId()
        {
            return ++id;
        }

        private static IEnumerable<DeployTarget> GenerateDeployTargets()
        {
            yield return new DeployTarget { Id = 0, Name = "Production", IsDefault = true };
            yield return new DeployTarget { Id = 1, Name = "Stage", IsDefault = false };
        }

        private static IEnumerable<Item> GenerateInitialItems()
        {
            yield return
                new BuildItem
                    {
                        Id = GenerateId(),
                        Name = "Tenrox-R1_1235",
                        CreateDate = new DateTime(2014, 4, 18, 23, 0, 0),
                        TimeStarted = null,
                        State = State.Pending,
                        Metrics = new MetricsStatus { State = State.Pending },
                        Build = new BuildStatus { State = State.Pending },
                        UnitTest = new TestStatus { State = State.Pending },
                        FunctionalTest = new TestStatus { State = State.Pending },
                        DeployTargets = null
                    };
            yield return
                new FirewallItem
                    {
                        Id = GenerateId(),
                        Name = "432462",
                        Owner = "jtuck",
                        CreateDate = new DateTime(2014, 4, 18, 12, 0, 0),
                        TimeStarted = new DateTime(2014, 4, 18, 12, 12,0),
                        State = State.Running,
                        Metrics = new MetricsStatus { State = State.Running },
                        Build = new BuildStatus { State = State.Pending },
                        UnitTest = new TestStatus { State = State.Pending },
                        FunctionalTest = new TestStatus { State = State.Pending }
                    };

            yield return
                new FirewallItem
                    {
                        Id = GenerateId(),
                        Name = "432461",
                        Owner = "samy",
                        CreateDate = new DateTime(2014, 4, 18, 10, 50, 0),
                        TimeStarted = new DateTime(2014, 4, 18, 10, 53, 0),
                        State = State.Failed,
                        Metrics =
                            new MetricsStatus
                                {
                                    State = State.Failed,
                                    Test = new MetricsScore { State = MetricsScoreState.Increased, Value = 64 },
                                    Maintability = new MetricsScore { State = MetricsScoreState.Reduced, Value = 53 },
                                    Security = new MetricsScore { State = MetricsScoreState.NotChanged, Value = 64 },
                                    Worksmanship = new MetricsScore { State = MetricsScoreState.NotChanged, Value = 72 },
                                },
                        Build =
                            new BuildStatus
                                {
                                    State = State.Succeeded,
                                    CompletedTime = new DateTime(2014, 4, 17, 10, 46, 0),
                                    DebugState = BuildTargetState.Succeeded,
                                    ReleaseState = BuildTargetState.Succeeded
                                },
                        UnitTest =
                            new TestStatus
                                {
                                    State = State.Succeeded,
                                    codeCoveragePercent = 76,
                                    passedCount = 142,
                                    failedCount = 10
                                },
                        FunctionalTest =
                            new TestStatus
                                {
                                    State = State.Succeeded,
                                    codeCoveragePercent = 23,
                                    passedCount = 4321,
                                    failedCount = 2145
                                },
                        Issue = new Issue { Type = IssueType.MetricsReduction }
                    };

            yield return
                new BuildItem
                    {
                        Id = GenerateId(),
                        Name = "Tenrox-R1_1235",
                        CreateDate = new DateTime(2014, 4, 17, 9, 40, 0),
                        TimeStarted = new DateTime(2014, 4, 17, 9, 42, 0),
                        State = State.Succeeded,
                        Metrics =
                            new MetricsStatus
                                {
                                    State = State.Succeeded,
                                    Test = new MetricsScore { State = MetricsScoreState.Increased, Value = 64 },
                                    Maintability = new MetricsScore { State = MetricsScoreState.Increased, Value = 53 },
                                    Security = new MetricsScore { State = MetricsScoreState.NotChanged, Value = 64 },
                                    Worksmanship = new MetricsScore { State = MetricsScoreState.NotChanged, Value = 72 },
                                },
                        Build =
                            new BuildStatus
                                {
                                    State = State.Succeeded,
                                    CompletedTime = new DateTime(2014, 4, 17, 10, 46, 0),
                                    DebugState = BuildTargetState.Succeeded,
                                    ReleaseState = BuildTargetState.Succeeded
                                },
                        UnitTest =
                            new TestStatus
                                {
                                    State = State.Succeeded,
                                    codeCoveragePercent = 76,
                                    passedCount = 142,
                                    failedCount = 10
                                },
                        FunctionalTest =
                            new TestStatus
                                {
                                    State = State.Succeeded,
                                    codeCoveragePercent = 23,
                                    passedCount = 4321,
                                    failedCount = 2145
                                },
                        DeployTargets = GenerateDeployTargets()
                    };

            yield return
                new FirewallItem
                    {
                        Id = GenerateId(),
                        Name = "432460",
                        Owner = "samy",
                        CreateDate = new DateTime(2014, 4, 17, 7, 40, 0),
                        TimeStarted = new DateTime(2014, 4, 17, 7, 51, 0),
                        State = State.Failed,
                        Metrics =
                            new MetricsStatus
                                {
                                    State = State.Failed,
                                    Test = new MetricsScore { State = MetricsScoreState.Increased, Value = 64 },
                                    Maintability = new MetricsScore { State = MetricsScoreState.Reduced, Value = 53 },
                                    Security = new MetricsScore { State = MetricsScoreState.NotChanged, Value = 64 },
                                    Worksmanship = new MetricsScore { State = MetricsScoreState.NotChanged, Value = 72 },
                                },
                        Build =
                            new BuildStatus
                                {
                                    State = State.Succeeded,
                                    CompletedTime = new DateTime(2014, 4, 17, 10, 46, 0),
                                    DebugState = BuildTargetState.Succeeded,
                                    ReleaseState = BuildTargetState.Succeeded
                                },
                        UnitTest =
                            new TestStatus
                                {
                                    State = State.Succeeded,
                                    codeCoveragePercent = 76,
                                    passedCount = 142,
                                    failedCount = 10
                                },
                        FunctionalTest =
                            new TestStatus
                                {
                                    State = State.Succeeded,
                                    codeCoveragePercent = 23,
                                    passedCount = 4321,
                                    failedCount = 2145
                                },
                        Issue = new Issue { Type = IssueType.MetricsReduction }
                    };

            yield return
                new FirewallItem
                    {
                        Id = GenerateId(),
                        Name = "432459",
                        Owner = "samy",
                        CreateDate = new DateTime(2014, 4, 16, 6, 40, 0),
                        TimeStarted = new DateTime(2014, 4, 16, 6, 43, 0),
                        State = State.Succeeded,
                        Metrics =
                            new MetricsStatus
                                {
                                    State = State.Succeeded,
                                    Test = new MetricsScore { State = MetricsScoreState.Increased, Value = 64 },
                                    Maintability = new MetricsScore { State = MetricsScoreState.Increased, Value = 53 },
                                    Security = new MetricsScore { State = MetricsScoreState.NotChanged, Value = 64 },
                                    Worksmanship = new MetricsScore { State = MetricsScoreState.NotChanged, Value = 72 },
                                },
                        Build =
                            new BuildStatus
                                {
                                    State = State.Succeeded,
                                    CompletedTime = new DateTime(2014, 4, 17, 10, 46, 0),
                                    DebugState = BuildTargetState.Succeeded,
                                    ReleaseState = BuildTargetState.Succeeded
                                },
                        UnitTest =
                            new TestStatus
                                {
                                    State = State.Succeeded,
                                    codeCoveragePercent = 76,
                                    passedCount = 142,
                                    failedCount = 10
                                },
                        FunctionalTest =
                            new TestStatus
                                {
                                    State = State.Succeeded,
                                    codeCoveragePercent = 23,
                                    passedCount = 4321,
                                    failedCount = 2145
                                }
                    };
        }

        private static ItemBuilder CreateItemBuilder()
        {
            var id = GenerateId();
            var random = new Random();
            if (random.NextDouble() < 0.5)
            {
                return new FirewallItemBuilder(id);
            }
            else
            {
                var deployTargets = GenerateDeployTargets();
                return new BuildItemBuilder(id, deployTargets);
            }
        }
    }
}