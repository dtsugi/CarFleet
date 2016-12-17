using CarFleet.BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CarFleet.API.Controllers
{
    public class LanguageController : ApiController
    {
        private LanguageLogic _LanguageLogic = new LanguageLogic();

        [HttpGet, Route("api/Language/GetById/{id}")]
        public IHttpActionResult GetById(int id)
        {
            try
            {
                return Ok(_LanguageLogic.GetById(id));
            }
            catch (Exception)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "No fue posible obtener el lenguaje"));
            }
        }

        [HttpGet, Route("api/Language/SelectAll/")]
        public IHttpActionResult SelectAll()
        {
            try
            {
                return Ok(_LanguageLogic.SelectAll());
            }
            catch (Exception)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "No fue posible obtener el listado de lenguajes"));
            }
        }
    }
}
