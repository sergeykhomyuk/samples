namespace web.Services
{
    using System.Collections.Generic;

    using web.Models;
    using web.Models.Issue;

    public interface IItemService
    {
        IEnumerable<Item> GetItems();

        void DeployItem(int id, int targetId);

        Issue FindIssue(int id);
    }
}