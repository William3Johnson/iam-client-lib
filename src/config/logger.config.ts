import { ConsoleLogger, ILogger } from '../utils/logger';

let logger: ILogger = new ConsoleLogger();

/**
 * Used to override existing console logger with custom logger of any type implementing required ILogger interface
 * Configuration must be set before constructing `IAM`
 */
export const setLogger = (newLogger: ILogger) => (logger = newLogger);

/**
 *
 * Returns currenly set up logger. Console Logger By default
 * @returns logger
 */
export const getLogger = () => logger;
