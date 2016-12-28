using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CarFleet.API2.Models
{
    public class UserSessionDto
    {
        public int IdUser { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }
        public string DeviceUUID { get; set; }
        public bool StaySession { get; set; }
        public int IdCompany { get; set; }
        public int IdLanguage { get; set; }
    }
}