using CarFleet.DAL;
using CarFleet.Models;
using System;
using System.Collections.Generic;

namespace CarFleet.BLL
{
    public class ConfigUserLoginLogic
    {
        private ConfigUserLoginCrud _ConfigUserLoginCrud = new ConfigUserLoginCrud();

        public string Insert(int idUser, string deviceUUID, int expirationTime)
        {
            ConfigUserLoginEntity entity = new ConfigUserLoginEntity();
            entity.IdUser = idUser;
            entity.DeviceUUID = deviceUUID;
            entity.Token = Guid.NewGuid().ToString();
            entity.Timestamp = DateTime.Now;
            entity.ExpirationTimestamp = DateTime.Now.AddSeconds(expirationTime);
            if (_ConfigUserLoginCrud.Insert(entity))
            {
                return entity.Token;
            }
            else { return null; }
        }

        public string LoginByToken(int idUser, string token, string deviceUUID, int expirationTime)
        {
            /* Reviso que exista el token que envia el usuario */
            ConfigUserLoginEntity configUser = this.SelectByUserTokenUUID(idUser, token, deviceUUID);
            if (configUser != null)
            {
                /* Si el token no esta vencido se le permite usar el mismo token */
                if (DateTime.Now > configUser.ExpirationTimestamp)
                {
                    return configUser.Token;
                }
                /* De lo contrario se renueva el token */
                else
                {
                    return this.Insert(idUser, deviceUUID, expirationTime);
                }
            }
            else { return null; };
        }

        public bool IsAuthenticated(int idUser, string token, string deviceUUID, int timeExpireSession, bool renewSession)
        {
            bool isAuthenticated = false;
            /* Reviso que exista el token que envia el usuario */
            ConfigUserLoginEntity configUser = this.SelectByUserTokenUUID(idUser, token, deviceUUID);
            if (configUser != null)
            {
                /* Si el token esta vencido se valida si se renueva la sesion automaticamente */
                if (DateTime.Now > configUser.ExpirationTimestamp)
                {
                    if (renewSession)
                    {
                        UpdateExpirationTimestamp(idUser, token, deviceUUID, DateTime.Now.AddMilliseconds(timeExpireSession));
                        isAuthenticated = true;

                    }
                }
                else { isAuthenticated = true; }

            }
            return isAuthenticated;
        }

        private ConfigUserLoginEntity SelectByUserTokenUUID(int idUser, string token, string deviceUUID)
        {
            return _ConfigUserLoginCrud.SelectByUserTokenUUID(idUser, token, deviceUUID);
        }

        private bool UpdateExpirationTimestamp(int idUser, string token, string deviceUUID, DateTime expirationTimestamp)
        {
            return _ConfigUserLoginCrud.UpdateExpirationTimestamp(idUser, token, deviceUUID, expirationTimestamp);
        }
    }
}
