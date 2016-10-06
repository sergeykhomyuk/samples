namespace web.Models.Issue
{
    public enum IssueType : int
    {
        MetricsReduction = 0,

        BuildFailed = 1,

        UnitTestFailed = 2,

        FunctionalTestFailed = 3
    }
}