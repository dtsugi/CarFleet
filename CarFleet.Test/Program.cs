using CarFleet.DAL;
using CarFleet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarFleet.Test
{
    class Program
    {
        static void Main(string[] args)
        {
            DriverCrud driverCrud = new DriverCrud();
            DriverEntity driver = driverCrud.SelectById(1);
            var p = driver;
        }

    }
}
