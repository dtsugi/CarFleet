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
            entity.ExpirationTimestamp = DateTime.Now.AddMilliseconds(expirationTime);
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

        public bool IsAuthenticated(int idUser, string token, string deviceUUID, int timeExpireSession)
        {
            /* Reviso que exista el token que envia el usuario */
            ConfigUserLoginEntity configUser = this.SelectByUserTokenUUID(idUser, token, deviceUUID);
            if (configUser != null)
            {
                /* Si el token no esta vencido se le permite usar el mismo token */
                return (DateTime.Now < DateTime.Now.AddMilliseconds(timeExpireSession));
            }
            return false;
        }

        private ConfigUserLoginEntity SelectByUserTokenUUID(int idUser, string token, string deviceUUID)
        {
            return _ConfigUserLoginCrud.SelectByUserTokenUUID(idUser, token, deviceUUID);
        }
    }
}
