namespace web.Services
{
    using System.Collections.Generic;

    using web.Models;
    using web.Models.Issue;

    public class ItemService : IItemService
    {
        public IEnumerable<Item> GetItems()
        {
            return DataContext.GenerateItems();
        }

        public void DeployItem(int id, int targetId)
        {
           
        }

        public Issue FindIssue(int id)
        {
            return DataContext.GenerateIssue(id);
        }
    }
}