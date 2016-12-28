using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarFleet.Models
{
    public class UserRestoreEntity
    {
        public Int64 Id { get; set; }
        public int IdUser { get; set; }
        public string Code { get; set; }        
        public DateTime CreatedDate { get; set; }
        public DateTime ExpirationDate{ get; set; }
    }
}
