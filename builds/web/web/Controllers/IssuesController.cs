namespace web.Controllers
{
    using System.Web.Http;

    using web.Models.Issue;
    using web.Services;

    public class IssuesController : ApiController
    {
        private readonly IItemService itemService;

        public IssuesController()
        {
            this.itemService = new ItemService();
        }

        public Issue Get([FromBody]int id)
        {
            return this.itemService.FindIssue(id);
        }
    }
}