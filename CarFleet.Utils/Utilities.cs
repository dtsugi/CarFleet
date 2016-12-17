using System;

namespace CarFleet.Utils
{
    public class Utilities
    {
        public static bool _IsCasteable(string objectIn, out object resultOut, Utils.Constants.DATA_TYPES returnDataType)
        {
            bool isCasteable = false;
            if (returnDataType == Constants.DATA_TYPES.INT)
            {
                int intOut = 0;
                isCasteable = int.TryParse(objectIn, out intOut);
                resultOut = intOut;
            }
            else if (returnDataType == Constants.DATA_TYPES.BIGINT)
            {
                Int32 bigintOut = 0;
                isCasteable = Int32.TryParse(objectIn, out bigintOut);
                resultOut = bigintOut;
            }
            else if (returnDataType == Constants.DATA_TYPES.DOUBLE)
            {
                double doubleOut = 0;
                isCasteable = double.TryParse(objectIn, out doubleOut);
                resultOut = doubleOut;
            }
            else if (returnDataType == Constants.DATA_TYPES.FLOAT)
            {
                float floatOut = 0;
                isCasteable = float.TryParse(objectIn, out floatOut);
                resultOut = floatOut;
            }
            else if (returnDataType == Constants.DATA_TYPES.DATETIME)
            {
                DateTime dateTimeOut;
                isCasteable = DateTime.TryParse(objectIn, out dateTimeOut);
                resultOut = dateTimeOut;
            }
            else if (returnDataType == Constants.DATA_TYPES.BIT)
            {
                bool boolOut;
                isCasteable = Boolean.TryParse(objectIn, out boolOut);
                resultOut = boolOut;
            }
            else
            {
                resultOut = null;
            }

            return isCasteable;
        }
    }
}
