namespace web.Models.BuildStatus
{
    using System;

    public class BuildStatus : ItemPropertyStatus
    {
        public BuildTargetState DebugState { get; set; }

        public BuildTargetState ReleaseState { get; set; }

        public DateTime CompletedTime { get; set; }
    }
}