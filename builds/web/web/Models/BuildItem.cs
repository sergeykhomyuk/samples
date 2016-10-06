namespace web.Models
{
    using System.Collections.Generic;

    public class BuildItem : Item
    {
        public IEnumerable<DeployTarget> DeployTargets { get; set; }

        public BuildItem()
        {
            this.Type = ItemType.Build;
        }
    }
}