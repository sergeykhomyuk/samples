namespace web.Models.MetricsStatus
{
    public class MetricsStatus : ItemPropertyStatus
    {
        public MetricsScore Test { get; set; }

        public MetricsScore Maintability { get; set; }

        public MetricsScore Security { get; set; }

        public MetricsScore Worksmanship { get; set; }
    }
}