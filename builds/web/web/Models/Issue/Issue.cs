namespace web.Models.Issue
{
    public class Issue
    {
        public int ItemId { get; set; }

        public IssueType Type { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}