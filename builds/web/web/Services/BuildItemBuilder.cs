namespace web.Services
{
    using System;
    using System.Collections.Generic;

    using web.Models;

    public class BuildItemBuilder: ItemBuilder
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="T:System.Object"/> class.
        /// </summary>
        public BuildItemBuilder(int itemId, IEnumerable<DeployTarget> deployTargets)
            : base(itemId)
        {

            var random = new Random();
            var item = new BuildItem
                {
                    Name = string.Format("Tenrox-R1_{0}", random.Next(10000)),
                    DeployTargets = deployTargets
                };
            this.Item = item;
        }
    }
}