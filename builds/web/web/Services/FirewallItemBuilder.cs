namespace web.Services
{
    using System;

    using web.Models;

    public class FirewallItemBuilder: ItemBuilder
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="T:System.Object"/> class.
        /// </summary>
        public FirewallItemBuilder(int itemId)
            : base(itemId)
        {
            var random = new Random();
            this.Item = new FirewallItem { Name = random.Next(1000000).ToString(), Owner = "sammy" };
        }


    }
}