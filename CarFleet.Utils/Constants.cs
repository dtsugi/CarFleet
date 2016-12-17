namespace CarFleet.Utils
{
    public class Constants
    {
        public const string APP_CONFIG_CURRENT_CONNECTION_STRING = "CurrentConnectionString";

        public enum DATA_TYPES { BIGINT, INT, DOUBLE, FLOAT, DECIMAL, VARCHAR, NVARCHAR, DATETIME, BIT };

        public enum CRUD_OPERATION { INSERT, UPDATE, SELECT, DELETE };
    }
}
