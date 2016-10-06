namespace web.Models.TestStatus
{
    public class TestStatus : ItemPropertyStatus
    {
        public int passedCount { get; set; }

        public int failedCount { get; set; }

        public int codeCoveragePercent { get; set; }
    }
}