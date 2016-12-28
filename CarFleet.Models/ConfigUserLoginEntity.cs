using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarFleet.Models
{
    public class ConfigUserLoginEntity
    {
        public Int64 Id { get; set; }
        public int IdUser { get; set; }
        public string Token { get; set; }
        public string DeviceUUID { get; set; }
        public DateTime Timestamp { get; set; }
        public DateTime ExpirationTimestamp { get; set; }
    }
}
