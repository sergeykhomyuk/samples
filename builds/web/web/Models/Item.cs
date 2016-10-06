namespace web.Models
{
    using System;

    public abstract class Item
    {
        public int Id { get; set; }

        public ItemType Type { get; set; }

        public string Name { get; set; }

        public DateTime CreateDate { get; set; }

        public DateTime? TimeStarted { get; set; }

        public State State { get; set; }

        public MetricsStatus.MetricsStatus Metrics { get; set; }

        public BuildStatus.BuildStatus Build { get; set; }

        public TestStatus.TestStatus UnitTest { get; set; }

        public TestStatus.TestStatus FunctionalTest { get; set; }

        public Issue.Issue Issue { get; set; }
    }
}