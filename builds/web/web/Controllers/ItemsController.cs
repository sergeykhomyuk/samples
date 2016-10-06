using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace web.Controllers
{
    using web.Models;
    using web.Services;

    public class ItemsController : ApiController
    {
        private readonly IItemService itemService;

        public ItemsController()
        {
            this.itemService = new ItemService();
        }

        // GET: api/Items
        public IEnumerable<Item> Get()
        {
            return this.itemService.GetItems();
        }     
    }
}
