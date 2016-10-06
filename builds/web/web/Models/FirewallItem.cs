namespace web.Models
{
    public class FirewallItem :Item
    {
        public string Owner { get; set; }

        public FirewallItem()
        {
            this.Type = ItemType.Firewall;            
        }
    }
}