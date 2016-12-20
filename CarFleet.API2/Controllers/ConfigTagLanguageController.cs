using CarFleet.BLL;
using CarFleet.Models;
using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace CarFleet.API2.Controllers
{
    public class ConfigTagLanguageController : ApiController
    {
        private ConfigTagLanguageLogic _ConfigTagLanguageLogic = new ConfigTagLanguageLogic();

        [HttpGet, Route("api/ConfigTagLanguage/GetByPageName/{pageName}")]
        public IHttpActionResult GetByPageName(string pageName)
        {
            try
            {
                return Ok(_ConfigTagLanguageLogic.SelectByPageName(pageName));
            }
            catch (Exception)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "No fue posible obtener la configyracion de las etiquetas por pagina"));
            }
        }

        [HttpGet, Route("api/ConfigTagLanguage/GetByLanguage/{languageId}")]
        public IHttpActionResult GetByLanguage(int languageId)
        {
            try
            {
                return Ok(_ConfigTagLanguageLogic.SelectByLanguage(languageId));
            }
            catch (Exception)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "No fue posible obtener la configyracion de las etiquetas por pagina"));
            }
        }

        [HttpPost, Route("api/ConfigTagLanguage/Update")]
        [ResponseType(typeof(ConfigTagLanguageEntity))]
        public async Task<HttpResponseMessage> Update(ConfigTagLanguageEntity entity)
        {
            try
            {
                HttpResponseMessage response;
                _ConfigTagLanguageLogic.Update(entity);
                response = Request.CreateResponse(HttpStatusCode.OK, true);
                return response;
            }
            catch (Exception ex)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Error al actualizar la etiqueta"));
            }
        }
    }
}
