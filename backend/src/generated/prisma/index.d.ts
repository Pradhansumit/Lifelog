
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model MoodEntry
 * 
 */
export type MoodEntry = $Result.DefaultSelection<Prisma.$MoodEntryPayload>
/**
 * Model OTP
 * 
 */
export type OTP = $Result.DefaultSelection<Prisma.$OTPPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moodEntry`: Exposes CRUD operations for the **MoodEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MoodEntries
    * const moodEntries = await prisma.moodEntry.findMany()
    * ```
    */
  get moodEntry(): Prisma.MoodEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oTP`: Exposes CRUD operations for the **OTP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OTPS
    * const oTPS = await prisma.oTP.findMany()
    * ```
    */
  get oTP(): Prisma.OTPDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    MoodEntry: 'MoodEntry',
    OTP: 'OTP'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "moodEntry" | "oTP"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MoodEntry: {
        payload: Prisma.$MoodEntryPayload<ExtArgs>
        fields: Prisma.MoodEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoodEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoodEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>
          }
          findFirst: {
            args: Prisma.MoodEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoodEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>
          }
          findMany: {
            args: Prisma.MoodEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>[]
          }
          create: {
            args: Prisma.MoodEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>
          }
          createMany: {
            args: Prisma.MoodEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoodEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>[]
          }
          delete: {
            args: Prisma.MoodEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>
          }
          update: {
            args: Prisma.MoodEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>
          }
          deleteMany: {
            args: Prisma.MoodEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoodEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoodEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>[]
          }
          upsert: {
            args: Prisma.MoodEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodEntryPayload>
          }
          aggregate: {
            args: Prisma.MoodEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMoodEntry>
          }
          groupBy: {
            args: Prisma.MoodEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoodEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoodEntryCountArgs<ExtArgs>
            result: $Utils.Optional<MoodEntryCountAggregateOutputType> | number
          }
        }
      }
      OTP: {
        payload: Prisma.$OTPPayload<ExtArgs>
        fields: Prisma.OTPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OTPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OTPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          findFirst: {
            args: Prisma.OTPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OTPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          findMany: {
            args: Prisma.OTPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>[]
          }
          create: {
            args: Prisma.OTPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          createMany: {
            args: Prisma.OTPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OTPCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>[]
          }
          delete: {
            args: Prisma.OTPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          update: {
            args: Prisma.OTPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          deleteMany: {
            args: Prisma.OTPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OTPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OTPUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>[]
          }
          upsert: {
            args: Prisma.OTPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          aggregate: {
            args: Prisma.OTPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOTP>
          }
          groupBy: {
            args: Prisma.OTPGroupByArgs<ExtArgs>
            result: $Utils.Optional<OTPGroupByOutputType>[]
          }
          count: {
            args: Prisma.OTPCountArgs<ExtArgs>
            result: $Utils.Optional<OTPCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    moodEntry?: MoodEntryOmit
    oTP?: OTPOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    moodEntries: number
    otp: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moodEntries?: boolean | UserCountOutputTypeCountMoodEntriesArgs
    otp?: boolean | UserCountOutputTypeCountOtpArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMoodEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOtpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTPWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    moodEntries?: boolean | User$moodEntriesArgs<ExtArgs>
    otp?: boolean | User$otpArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moodEntries?: boolean | User$moodEntriesArgs<ExtArgs>
    otp?: boolean | User$otpArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      moodEntries: Prisma.$MoodEntryPayload<ExtArgs>[]
      otp: Prisma.$OTPPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    moodEntries<T extends User$moodEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$moodEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    otp<T extends User$otpArgs<ExtArgs> = {}>(args?: Subset<T, User$otpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.moodEntries
   */
  export type User$moodEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    where?: MoodEntryWhereInput
    orderBy?: MoodEntryOrderByWithRelationInput | MoodEntryOrderByWithRelationInput[]
    cursor?: MoodEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoodEntryScalarFieldEnum | MoodEntryScalarFieldEnum[]
  }

  /**
   * User.otp
   */
  export type User$otpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    where?: OTPWhereInput
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    cursor?: OTPWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model MoodEntry
   */

  export type AggregateMoodEntry = {
    _count: MoodEntryCountAggregateOutputType | null
    _avg: MoodEntryAvgAggregateOutputType | null
    _sum: MoodEntrySumAggregateOutputType | null
    _min: MoodEntryMinAggregateOutputType | null
    _max: MoodEntryMaxAggregateOutputType | null
  }

  export type MoodEntryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MoodEntrySumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MoodEntryMinAggregateOutputType = {
    id: number | null
    userId: number | null
    date: Date | null
    mood: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MoodEntryMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    date: Date | null
    mood: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MoodEntryCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    mood: number
    note: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MoodEntryAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MoodEntrySumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MoodEntryMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    mood?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MoodEntryMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    mood?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MoodEntryCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    mood?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MoodEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoodEntry to aggregate.
     */
    where?: MoodEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodEntries to fetch.
     */
    orderBy?: MoodEntryOrderByWithRelationInput | MoodEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoodEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MoodEntries
    **/
    _count?: true | MoodEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoodEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoodEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoodEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoodEntryMaxAggregateInputType
  }

  export type GetMoodEntryAggregateType<T extends MoodEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateMoodEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMoodEntry[P]>
      : GetScalarType<T[P], AggregateMoodEntry[P]>
  }




  export type MoodEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodEntryWhereInput
    orderBy?: MoodEntryOrderByWithAggregationInput | MoodEntryOrderByWithAggregationInput[]
    by: MoodEntryScalarFieldEnum[] | MoodEntryScalarFieldEnum
    having?: MoodEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoodEntryCountAggregateInputType | true
    _avg?: MoodEntryAvgAggregateInputType
    _sum?: MoodEntrySumAggregateInputType
    _min?: MoodEntryMinAggregateInputType
    _max?: MoodEntryMaxAggregateInputType
  }

  export type MoodEntryGroupByOutputType = {
    id: number
    userId: number
    date: Date
    mood: string
    note: string | null
    createdAt: Date
    updatedAt: Date
    _count: MoodEntryCountAggregateOutputType | null
    _avg: MoodEntryAvgAggregateOutputType | null
    _sum: MoodEntrySumAggregateOutputType | null
    _min: MoodEntryMinAggregateOutputType | null
    _max: MoodEntryMaxAggregateOutputType | null
  }

  type GetMoodEntryGroupByPayload<T extends MoodEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoodEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoodEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoodEntryGroupByOutputType[P]>
            : GetScalarType<T[P], MoodEntryGroupByOutputType[P]>
        }
      >
    >


  export type MoodEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    mood?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodEntry"]>

  export type MoodEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    mood?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodEntry"]>

  export type MoodEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    mood?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodEntry"]>

  export type MoodEntrySelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    mood?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MoodEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "mood" | "note" | "createdAt" | "updatedAt", ExtArgs["result"]["moodEntry"]>
  export type MoodEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MoodEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MoodEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MoodEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MoodEntry"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      date: Date
      mood: string
      note: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["moodEntry"]>
    composites: {}
  }

  type MoodEntryGetPayload<S extends boolean | null | undefined | MoodEntryDefaultArgs> = $Result.GetResult<Prisma.$MoodEntryPayload, S>

  type MoodEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoodEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoodEntryCountAggregateInputType | true
    }

  export interface MoodEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MoodEntry'], meta: { name: 'MoodEntry' } }
    /**
     * Find zero or one MoodEntry that matches the filter.
     * @param {MoodEntryFindUniqueArgs} args - Arguments to find a MoodEntry
     * @example
     * // Get one MoodEntry
     * const moodEntry = await prisma.moodEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoodEntryFindUniqueArgs>(args: SelectSubset<T, MoodEntryFindUniqueArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MoodEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoodEntryFindUniqueOrThrowArgs} args - Arguments to find a MoodEntry
     * @example
     * // Get one MoodEntry
     * const moodEntry = await prisma.moodEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoodEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, MoodEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoodEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEntryFindFirstArgs} args - Arguments to find a MoodEntry
     * @example
     * // Get one MoodEntry
     * const moodEntry = await prisma.moodEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoodEntryFindFirstArgs>(args?: SelectSubset<T, MoodEntryFindFirstArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoodEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEntryFindFirstOrThrowArgs} args - Arguments to find a MoodEntry
     * @example
     * // Get one MoodEntry
     * const moodEntry = await prisma.moodEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoodEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, MoodEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MoodEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MoodEntries
     * const moodEntries = await prisma.moodEntry.findMany()
     * 
     * // Get first 10 MoodEntries
     * const moodEntries = await prisma.moodEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moodEntryWithIdOnly = await prisma.moodEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoodEntryFindManyArgs>(args?: SelectSubset<T, MoodEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MoodEntry.
     * @param {MoodEntryCreateArgs} args - Arguments to create a MoodEntry.
     * @example
     * // Create one MoodEntry
     * const MoodEntry = await prisma.moodEntry.create({
     *   data: {
     *     // ... data to create a MoodEntry
     *   }
     * })
     * 
     */
    create<T extends MoodEntryCreateArgs>(args: SelectSubset<T, MoodEntryCreateArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MoodEntries.
     * @param {MoodEntryCreateManyArgs} args - Arguments to create many MoodEntries.
     * @example
     * // Create many MoodEntries
     * const moodEntry = await prisma.moodEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoodEntryCreateManyArgs>(args?: SelectSubset<T, MoodEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MoodEntries and returns the data saved in the database.
     * @param {MoodEntryCreateManyAndReturnArgs} args - Arguments to create many MoodEntries.
     * @example
     * // Create many MoodEntries
     * const moodEntry = await prisma.moodEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MoodEntries and only return the `id`
     * const moodEntryWithIdOnly = await prisma.moodEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoodEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, MoodEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MoodEntry.
     * @param {MoodEntryDeleteArgs} args - Arguments to delete one MoodEntry.
     * @example
     * // Delete one MoodEntry
     * const MoodEntry = await prisma.moodEntry.delete({
     *   where: {
     *     // ... filter to delete one MoodEntry
     *   }
     * })
     * 
     */
    delete<T extends MoodEntryDeleteArgs>(args: SelectSubset<T, MoodEntryDeleteArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MoodEntry.
     * @param {MoodEntryUpdateArgs} args - Arguments to update one MoodEntry.
     * @example
     * // Update one MoodEntry
     * const moodEntry = await prisma.moodEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoodEntryUpdateArgs>(args: SelectSubset<T, MoodEntryUpdateArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MoodEntries.
     * @param {MoodEntryDeleteManyArgs} args - Arguments to filter MoodEntries to delete.
     * @example
     * // Delete a few MoodEntries
     * const { count } = await prisma.moodEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoodEntryDeleteManyArgs>(args?: SelectSubset<T, MoodEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoodEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MoodEntries
     * const moodEntry = await prisma.moodEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoodEntryUpdateManyArgs>(args: SelectSubset<T, MoodEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoodEntries and returns the data updated in the database.
     * @param {MoodEntryUpdateManyAndReturnArgs} args - Arguments to update many MoodEntries.
     * @example
     * // Update many MoodEntries
     * const moodEntry = await prisma.moodEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MoodEntries and only return the `id`
     * const moodEntryWithIdOnly = await prisma.moodEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MoodEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, MoodEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MoodEntry.
     * @param {MoodEntryUpsertArgs} args - Arguments to update or create a MoodEntry.
     * @example
     * // Update or create a MoodEntry
     * const moodEntry = await prisma.moodEntry.upsert({
     *   create: {
     *     // ... data to create a MoodEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MoodEntry we want to update
     *   }
     * })
     */
    upsert<T extends MoodEntryUpsertArgs>(args: SelectSubset<T, MoodEntryUpsertArgs<ExtArgs>>): Prisma__MoodEntryClient<$Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MoodEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEntryCountArgs} args - Arguments to filter MoodEntries to count.
     * @example
     * // Count the number of MoodEntries
     * const count = await prisma.moodEntry.count({
     *   where: {
     *     // ... the filter for the MoodEntries we want to count
     *   }
     * })
    **/
    count<T extends MoodEntryCountArgs>(
      args?: Subset<T, MoodEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoodEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MoodEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MoodEntryAggregateArgs>(args: Subset<T, MoodEntryAggregateArgs>): Prisma.PrismaPromise<GetMoodEntryAggregateType<T>>

    /**
     * Group by MoodEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MoodEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoodEntryGroupByArgs['orderBy'] }
        : { orderBy?: MoodEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MoodEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoodEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MoodEntry model
   */
  readonly fields: MoodEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MoodEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoodEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MoodEntry model
   */
  interface MoodEntryFieldRefs {
    readonly id: FieldRef<"MoodEntry", 'Int'>
    readonly userId: FieldRef<"MoodEntry", 'Int'>
    readonly date: FieldRef<"MoodEntry", 'DateTime'>
    readonly mood: FieldRef<"MoodEntry", 'String'>
    readonly note: FieldRef<"MoodEntry", 'String'>
    readonly createdAt: FieldRef<"MoodEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"MoodEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MoodEntry findUnique
   */
  export type MoodEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * Filter, which MoodEntry to fetch.
     */
    where: MoodEntryWhereUniqueInput
  }

  /**
   * MoodEntry findUniqueOrThrow
   */
  export type MoodEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * Filter, which MoodEntry to fetch.
     */
    where: MoodEntryWhereUniqueInput
  }

  /**
   * MoodEntry findFirst
   */
  export type MoodEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * Filter, which MoodEntry to fetch.
     */
    where?: MoodEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodEntries to fetch.
     */
    orderBy?: MoodEntryOrderByWithRelationInput | MoodEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoodEntries.
     */
    cursor?: MoodEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoodEntries.
     */
    distinct?: MoodEntryScalarFieldEnum | MoodEntryScalarFieldEnum[]
  }

  /**
   * MoodEntry findFirstOrThrow
   */
  export type MoodEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * Filter, which MoodEntry to fetch.
     */
    where?: MoodEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodEntries to fetch.
     */
    orderBy?: MoodEntryOrderByWithRelationInput | MoodEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoodEntries.
     */
    cursor?: MoodEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoodEntries.
     */
    distinct?: MoodEntryScalarFieldEnum | MoodEntryScalarFieldEnum[]
  }

  /**
   * MoodEntry findMany
   */
  export type MoodEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * Filter, which MoodEntries to fetch.
     */
    where?: MoodEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodEntries to fetch.
     */
    orderBy?: MoodEntryOrderByWithRelationInput | MoodEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MoodEntries.
     */
    cursor?: MoodEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodEntries.
     */
    skip?: number
    distinct?: MoodEntryScalarFieldEnum | MoodEntryScalarFieldEnum[]
  }

  /**
   * MoodEntry create
   */
  export type MoodEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a MoodEntry.
     */
    data: XOR<MoodEntryCreateInput, MoodEntryUncheckedCreateInput>
  }

  /**
   * MoodEntry createMany
   */
  export type MoodEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MoodEntries.
     */
    data: MoodEntryCreateManyInput | MoodEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MoodEntry createManyAndReturn
   */
  export type MoodEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * The data used to create many MoodEntries.
     */
    data: MoodEntryCreateManyInput | MoodEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MoodEntry update
   */
  export type MoodEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a MoodEntry.
     */
    data: XOR<MoodEntryUpdateInput, MoodEntryUncheckedUpdateInput>
    /**
     * Choose, which MoodEntry to update.
     */
    where: MoodEntryWhereUniqueInput
  }

  /**
   * MoodEntry updateMany
   */
  export type MoodEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MoodEntries.
     */
    data: XOR<MoodEntryUpdateManyMutationInput, MoodEntryUncheckedUpdateManyInput>
    /**
     * Filter which MoodEntries to update
     */
    where?: MoodEntryWhereInput
    /**
     * Limit how many MoodEntries to update.
     */
    limit?: number
  }

  /**
   * MoodEntry updateManyAndReturn
   */
  export type MoodEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * The data used to update MoodEntries.
     */
    data: XOR<MoodEntryUpdateManyMutationInput, MoodEntryUncheckedUpdateManyInput>
    /**
     * Filter which MoodEntries to update
     */
    where?: MoodEntryWhereInput
    /**
     * Limit how many MoodEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MoodEntry upsert
   */
  export type MoodEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the MoodEntry to update in case it exists.
     */
    where: MoodEntryWhereUniqueInput
    /**
     * In case the MoodEntry found by the `where` argument doesn't exist, create a new MoodEntry with this data.
     */
    create: XOR<MoodEntryCreateInput, MoodEntryUncheckedCreateInput>
    /**
     * In case the MoodEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoodEntryUpdateInput, MoodEntryUncheckedUpdateInput>
  }

  /**
   * MoodEntry delete
   */
  export type MoodEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
    /**
     * Filter which MoodEntry to delete.
     */
    where: MoodEntryWhereUniqueInput
  }

  /**
   * MoodEntry deleteMany
   */
  export type MoodEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoodEntries to delete
     */
    where?: MoodEntryWhereInput
    /**
     * Limit how many MoodEntries to delete.
     */
    limit?: number
  }

  /**
   * MoodEntry without action
   */
  export type MoodEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodEntry
     */
    select?: MoodEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodEntry
     */
    omit?: MoodEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodEntryInclude<ExtArgs> | null
  }


  /**
   * Model OTP
   */

  export type AggregateOTP = {
    _count: OTPCountAggregateOutputType | null
    _avg: OTPAvgAggregateOutputType | null
    _sum: OTPSumAggregateOutputType | null
    _min: OTPMinAggregateOutputType | null
    _max: OTPMaxAggregateOutputType | null
  }

  export type OTPAvgAggregateOutputType = {
    id: number | null
    otp: number | null
    userId: number | null
  }

  export type OTPSumAggregateOutputType = {
    id: number | null
    otp: number | null
    userId: number | null
  }

  export type OTPMinAggregateOutputType = {
    id: number | null
    otp: number | null
    createdAt: Date | null
    userId: number | null
  }

  export type OTPMaxAggregateOutputType = {
    id: number | null
    otp: number | null
    createdAt: Date | null
    userId: number | null
  }

  export type OTPCountAggregateOutputType = {
    id: number
    otp: number
    createdAt: number
    userId: number
    _all: number
  }


  export type OTPAvgAggregateInputType = {
    id?: true
    otp?: true
    userId?: true
  }

  export type OTPSumAggregateInputType = {
    id?: true
    otp?: true
    userId?: true
  }

  export type OTPMinAggregateInputType = {
    id?: true
    otp?: true
    createdAt?: true
    userId?: true
  }

  export type OTPMaxAggregateInputType = {
    id?: true
    otp?: true
    createdAt?: true
    userId?: true
  }

  export type OTPCountAggregateInputType = {
    id?: true
    otp?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type OTPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTP to aggregate.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OTPS
    **/
    _count?: true | OTPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OTPAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OTPSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OTPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OTPMaxAggregateInputType
  }

  export type GetOTPAggregateType<T extends OTPAggregateArgs> = {
        [P in keyof T & keyof AggregateOTP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOTP[P]>
      : GetScalarType<T[P], AggregateOTP[P]>
  }




  export type OTPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTPWhereInput
    orderBy?: OTPOrderByWithAggregationInput | OTPOrderByWithAggregationInput[]
    by: OTPScalarFieldEnum[] | OTPScalarFieldEnum
    having?: OTPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OTPCountAggregateInputType | true
    _avg?: OTPAvgAggregateInputType
    _sum?: OTPSumAggregateInputType
    _min?: OTPMinAggregateInputType
    _max?: OTPMaxAggregateInputType
  }

  export type OTPGroupByOutputType = {
    id: number
    otp: number
    createdAt: Date
    userId: number
    _count: OTPCountAggregateOutputType | null
    _avg: OTPAvgAggregateOutputType | null
    _sum: OTPSumAggregateOutputType | null
    _min: OTPMinAggregateOutputType | null
    _max: OTPMaxAggregateOutputType | null
  }

  type GetOTPGroupByPayload<T extends OTPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OTPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OTPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OTPGroupByOutputType[P]>
            : GetScalarType<T[P], OTPGroupByOutputType[P]>
        }
      >
    >


  export type OTPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    otp?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oTP"]>

  export type OTPSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    otp?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oTP"]>

  export type OTPSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    otp?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oTP"]>

  export type OTPSelectScalar = {
    id?: boolean
    otp?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type OTPOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "otp" | "createdAt" | "userId", ExtArgs["result"]["oTP"]>
  export type OTPInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OTPIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OTPIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OTPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OTP"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      otp: number
      createdAt: Date
      userId: number
    }, ExtArgs["result"]["oTP"]>
    composites: {}
  }

  type OTPGetPayload<S extends boolean | null | undefined | OTPDefaultArgs> = $Result.GetResult<Prisma.$OTPPayload, S>

  type OTPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OTPFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OTPCountAggregateInputType | true
    }

  export interface OTPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OTP'], meta: { name: 'OTP' } }
    /**
     * Find zero or one OTP that matches the filter.
     * @param {OTPFindUniqueArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OTPFindUniqueArgs>(args: SelectSubset<T, OTPFindUniqueArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OTP that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OTPFindUniqueOrThrowArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OTPFindUniqueOrThrowArgs>(args: SelectSubset<T, OTPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OTP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPFindFirstArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OTPFindFirstArgs>(args?: SelectSubset<T, OTPFindFirstArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OTP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPFindFirstOrThrowArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OTPFindFirstOrThrowArgs>(args?: SelectSubset<T, OTPFindFirstOrThrowArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OTPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OTPS
     * const oTPS = await prisma.oTP.findMany()
     * 
     * // Get first 10 OTPS
     * const oTPS = await prisma.oTP.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oTPWithIdOnly = await prisma.oTP.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OTPFindManyArgs>(args?: SelectSubset<T, OTPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OTP.
     * @param {OTPCreateArgs} args - Arguments to create a OTP.
     * @example
     * // Create one OTP
     * const OTP = await prisma.oTP.create({
     *   data: {
     *     // ... data to create a OTP
     *   }
     * })
     * 
     */
    create<T extends OTPCreateArgs>(args: SelectSubset<T, OTPCreateArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OTPS.
     * @param {OTPCreateManyArgs} args - Arguments to create many OTPS.
     * @example
     * // Create many OTPS
     * const oTP = await prisma.oTP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OTPCreateManyArgs>(args?: SelectSubset<T, OTPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OTPS and returns the data saved in the database.
     * @param {OTPCreateManyAndReturnArgs} args - Arguments to create many OTPS.
     * @example
     * // Create many OTPS
     * const oTP = await prisma.oTP.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OTPS and only return the `id`
     * const oTPWithIdOnly = await prisma.oTP.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OTPCreateManyAndReturnArgs>(args?: SelectSubset<T, OTPCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OTP.
     * @param {OTPDeleteArgs} args - Arguments to delete one OTP.
     * @example
     * // Delete one OTP
     * const OTP = await prisma.oTP.delete({
     *   where: {
     *     // ... filter to delete one OTP
     *   }
     * })
     * 
     */
    delete<T extends OTPDeleteArgs>(args: SelectSubset<T, OTPDeleteArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OTP.
     * @param {OTPUpdateArgs} args - Arguments to update one OTP.
     * @example
     * // Update one OTP
     * const oTP = await prisma.oTP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OTPUpdateArgs>(args: SelectSubset<T, OTPUpdateArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OTPS.
     * @param {OTPDeleteManyArgs} args - Arguments to filter OTPS to delete.
     * @example
     * // Delete a few OTPS
     * const { count } = await prisma.oTP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OTPDeleteManyArgs>(args?: SelectSubset<T, OTPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OTPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OTPS
     * const oTP = await prisma.oTP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OTPUpdateManyArgs>(args: SelectSubset<T, OTPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OTPS and returns the data updated in the database.
     * @param {OTPUpdateManyAndReturnArgs} args - Arguments to update many OTPS.
     * @example
     * // Update many OTPS
     * const oTP = await prisma.oTP.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OTPS and only return the `id`
     * const oTPWithIdOnly = await prisma.oTP.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OTPUpdateManyAndReturnArgs>(args: SelectSubset<T, OTPUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OTP.
     * @param {OTPUpsertArgs} args - Arguments to update or create a OTP.
     * @example
     * // Update or create a OTP
     * const oTP = await prisma.oTP.upsert({
     *   create: {
     *     // ... data to create a OTP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OTP we want to update
     *   }
     * })
     */
    upsert<T extends OTPUpsertArgs>(args: SelectSubset<T, OTPUpsertArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OTPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPCountArgs} args - Arguments to filter OTPS to count.
     * @example
     * // Count the number of OTPS
     * const count = await prisma.oTP.count({
     *   where: {
     *     // ... the filter for the OTPS we want to count
     *   }
     * })
    **/
    count<T extends OTPCountArgs>(
      args?: Subset<T, OTPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OTPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OTP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OTPAggregateArgs>(args: Subset<T, OTPAggregateArgs>): Prisma.PrismaPromise<GetOTPAggregateType<T>>

    /**
     * Group by OTP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OTPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OTPGroupByArgs['orderBy'] }
        : { orderBy?: OTPGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OTPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOTPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OTP model
   */
  readonly fields: OTPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OTP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OTPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OTP model
   */
  interface OTPFieldRefs {
    readonly id: FieldRef<"OTP", 'Int'>
    readonly otp: FieldRef<"OTP", 'Int'>
    readonly createdAt: FieldRef<"OTP", 'DateTime'>
    readonly userId: FieldRef<"OTP", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OTP findUnique
   */
  export type OTPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP findUniqueOrThrow
   */
  export type OTPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP findFirst
   */
  export type OTPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTPS.
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTPS.
     */
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * OTP findFirstOrThrow
   */
  export type OTPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTPS.
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTPS.
     */
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * OTP findMany
   */
  export type OTPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTPS to fetch.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OTPS.
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * OTP create
   */
  export type OTPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * The data needed to create a OTP.
     */
    data: XOR<OTPCreateInput, OTPUncheckedCreateInput>
  }

  /**
   * OTP createMany
   */
  export type OTPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OTPS.
     */
    data: OTPCreateManyInput | OTPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OTP createManyAndReturn
   */
  export type OTPCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * The data used to create many OTPS.
     */
    data: OTPCreateManyInput | OTPCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OTP update
   */
  export type OTPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * The data needed to update a OTP.
     */
    data: XOR<OTPUpdateInput, OTPUncheckedUpdateInput>
    /**
     * Choose, which OTP to update.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP updateMany
   */
  export type OTPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OTPS.
     */
    data: XOR<OTPUpdateManyMutationInput, OTPUncheckedUpdateManyInput>
    /**
     * Filter which OTPS to update
     */
    where?: OTPWhereInput
    /**
     * Limit how many OTPS to update.
     */
    limit?: number
  }

  /**
   * OTP updateManyAndReturn
   */
  export type OTPUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * The data used to update OTPS.
     */
    data: XOR<OTPUpdateManyMutationInput, OTPUncheckedUpdateManyInput>
    /**
     * Filter which OTPS to update
     */
    where?: OTPWhereInput
    /**
     * Limit how many OTPS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OTP upsert
   */
  export type OTPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * The filter to search for the OTP to update in case it exists.
     */
    where: OTPWhereUniqueInput
    /**
     * In case the OTP found by the `where` argument doesn't exist, create a new OTP with this data.
     */
    create: XOR<OTPCreateInput, OTPUncheckedCreateInput>
    /**
     * In case the OTP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OTPUpdateInput, OTPUncheckedUpdateInput>
  }

  /**
   * OTP delete
   */
  export type OTPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter which OTP to delete.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP deleteMany
   */
  export type OTPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTPS to delete
     */
    where?: OTPWhereInput
    /**
     * Limit how many OTPS to delete.
     */
    limit?: number
  }

  /**
   * OTP without action
   */
  export type OTPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MoodEntryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    mood: 'mood',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MoodEntryScalarFieldEnum = (typeof MoodEntryScalarFieldEnum)[keyof typeof MoodEntryScalarFieldEnum]


  export const OTPScalarFieldEnum: {
    id: 'id',
    otp: 'otp',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type OTPScalarFieldEnum = (typeof OTPScalarFieldEnum)[keyof typeof OTPScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    moodEntries?: MoodEntryListRelationFilter
    otp?: OTPListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    moodEntries?: MoodEntryOrderByRelationAggregateInput
    otp?: OTPOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    moodEntries?: MoodEntryListRelationFilter
    otp?: OTPListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MoodEntryWhereInput = {
    AND?: MoodEntryWhereInput | MoodEntryWhereInput[]
    OR?: MoodEntryWhereInput[]
    NOT?: MoodEntryWhereInput | MoodEntryWhereInput[]
    id?: IntFilter<"MoodEntry"> | number
    userId?: IntFilter<"MoodEntry"> | number
    date?: DateTimeFilter<"MoodEntry"> | Date | string
    mood?: StringFilter<"MoodEntry"> | string
    note?: StringNullableFilter<"MoodEntry"> | string | null
    createdAt?: DateTimeFilter<"MoodEntry"> | Date | string
    updatedAt?: DateTimeFilter<"MoodEntry"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MoodEntryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    mood?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type MoodEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_date?: MoodEntryUserIdDateCompoundUniqueInput
    AND?: MoodEntryWhereInput | MoodEntryWhereInput[]
    OR?: MoodEntryWhereInput[]
    NOT?: MoodEntryWhereInput | MoodEntryWhereInput[]
    userId?: IntFilter<"MoodEntry"> | number
    date?: DateTimeFilter<"MoodEntry"> | Date | string
    mood?: StringFilter<"MoodEntry"> | string
    note?: StringNullableFilter<"MoodEntry"> | string | null
    createdAt?: DateTimeFilter<"MoodEntry"> | Date | string
    updatedAt?: DateTimeFilter<"MoodEntry"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type MoodEntryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    mood?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MoodEntryCountOrderByAggregateInput
    _avg?: MoodEntryAvgOrderByAggregateInput
    _max?: MoodEntryMaxOrderByAggregateInput
    _min?: MoodEntryMinOrderByAggregateInput
    _sum?: MoodEntrySumOrderByAggregateInput
  }

  export type MoodEntryScalarWhereWithAggregatesInput = {
    AND?: MoodEntryScalarWhereWithAggregatesInput | MoodEntryScalarWhereWithAggregatesInput[]
    OR?: MoodEntryScalarWhereWithAggregatesInput[]
    NOT?: MoodEntryScalarWhereWithAggregatesInput | MoodEntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MoodEntry"> | number
    userId?: IntWithAggregatesFilter<"MoodEntry"> | number
    date?: DateTimeWithAggregatesFilter<"MoodEntry"> | Date | string
    mood?: StringWithAggregatesFilter<"MoodEntry"> | string
    note?: StringNullableWithAggregatesFilter<"MoodEntry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MoodEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MoodEntry"> | Date | string
  }

  export type OTPWhereInput = {
    AND?: OTPWhereInput | OTPWhereInput[]
    OR?: OTPWhereInput[]
    NOT?: OTPWhereInput | OTPWhereInput[]
    id?: IntFilter<"OTP"> | number
    otp?: IntFilter<"OTP"> | number
    createdAt?: DateTimeFilter<"OTP"> | Date | string
    userId?: IntFilter<"OTP"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OTPOrderByWithRelationInput = {
    id?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OTPWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OTPWhereInput | OTPWhereInput[]
    OR?: OTPWhereInput[]
    NOT?: OTPWhereInput | OTPWhereInput[]
    otp?: IntFilter<"OTP"> | number
    createdAt?: DateTimeFilter<"OTP"> | Date | string
    userId?: IntFilter<"OTP"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OTPOrderByWithAggregationInput = {
    id?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: OTPCountOrderByAggregateInput
    _avg?: OTPAvgOrderByAggregateInput
    _max?: OTPMaxOrderByAggregateInput
    _min?: OTPMinOrderByAggregateInput
    _sum?: OTPSumOrderByAggregateInput
  }

  export type OTPScalarWhereWithAggregatesInput = {
    AND?: OTPScalarWhereWithAggregatesInput | OTPScalarWhereWithAggregatesInput[]
    OR?: OTPScalarWhereWithAggregatesInput[]
    NOT?: OTPScalarWhereWithAggregatesInput | OTPScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OTP"> | number
    otp?: IntWithAggregatesFilter<"OTP"> | number
    createdAt?: DateTimeWithAggregatesFilter<"OTP"> | Date | string
    userId?: IntWithAggregatesFilter<"OTP"> | number
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moodEntries?: MoodEntryCreateNestedManyWithoutUserInput
    otp?: OTPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moodEntries?: MoodEntryUncheckedCreateNestedManyWithoutUserInput
    otp?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moodEntries?: MoodEntryUpdateManyWithoutUserNestedInput
    otp?: OTPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moodEntries?: MoodEntryUncheckedUpdateManyWithoutUserNestedInput
    otp?: OTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodEntryCreateInput = {
    date: Date | string
    mood: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutMoodEntriesInput
  }

  export type MoodEntryUncheckedCreateInput = {
    id?: number
    userId: number
    date: Date | string
    mood: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MoodEntryUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mood?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutMoodEntriesNestedInput
  }

  export type MoodEntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mood?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodEntryCreateManyInput = {
    id?: number
    userId: number
    date: Date | string
    mood: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MoodEntryUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mood?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodEntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mood?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPCreateInput = {
    otp: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOtpInput
  }

  export type OTPUncheckedCreateInput = {
    id?: number
    otp: number
    createdAt?: Date | string
    userId: number
  }

  export type OTPUpdateInput = {
    otp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOtpNestedInput
  }

  export type OTPUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OTPCreateManyInput = {
    id?: number
    otp: number
    createdAt?: Date | string
    userId: number
  }

  export type OTPUpdateManyMutationInput = {
    otp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MoodEntryListRelationFilter = {
    every?: MoodEntryWhereInput
    some?: MoodEntryWhereInput
    none?: MoodEntryWhereInput
  }

  export type OTPListRelationFilter = {
    every?: OTPWhereInput
    some?: OTPWhereInput
    none?: OTPWhereInput
  }

  export type MoodEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OTPOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MoodEntryUserIdDateCompoundUniqueInput = {
    userId: number
    date: Date | string
  }

  export type MoodEntryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    mood?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MoodEntryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MoodEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    mood?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MoodEntryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    mood?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MoodEntrySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type OTPCountOrderByAggregateInput = {
    id?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type OTPAvgOrderByAggregateInput = {
    id?: SortOrder
    otp?: SortOrder
    userId?: SortOrder
  }

  export type OTPMaxOrderByAggregateInput = {
    id?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type OTPMinOrderByAggregateInput = {
    id?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type OTPSumOrderByAggregateInput = {
    id?: SortOrder
    otp?: SortOrder
    userId?: SortOrder
  }

  export type MoodEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<MoodEntryCreateWithoutUserInput, MoodEntryUncheckedCreateWithoutUserInput> | MoodEntryCreateWithoutUserInput[] | MoodEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodEntryCreateOrConnectWithoutUserInput | MoodEntryCreateOrConnectWithoutUserInput[]
    createMany?: MoodEntryCreateManyUserInputEnvelope
    connect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
  }

  export type OTPCreateNestedManyWithoutUserInput = {
    create?: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput> | OTPCreateWithoutUserInput[] | OTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OTPCreateOrConnectWithoutUserInput | OTPCreateOrConnectWithoutUserInput[]
    createMany?: OTPCreateManyUserInputEnvelope
    connect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
  }

  export type MoodEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MoodEntryCreateWithoutUserInput, MoodEntryUncheckedCreateWithoutUserInput> | MoodEntryCreateWithoutUserInput[] | MoodEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodEntryCreateOrConnectWithoutUserInput | MoodEntryCreateOrConnectWithoutUserInput[]
    createMany?: MoodEntryCreateManyUserInputEnvelope
    connect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
  }

  export type OTPUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput> | OTPCreateWithoutUserInput[] | OTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OTPCreateOrConnectWithoutUserInput | OTPCreateOrConnectWithoutUserInput[]
    createMany?: OTPCreateManyUserInputEnvelope
    connect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MoodEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoodEntryCreateWithoutUserInput, MoodEntryUncheckedCreateWithoutUserInput> | MoodEntryCreateWithoutUserInput[] | MoodEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodEntryCreateOrConnectWithoutUserInput | MoodEntryCreateOrConnectWithoutUserInput[]
    upsert?: MoodEntryUpsertWithWhereUniqueWithoutUserInput | MoodEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoodEntryCreateManyUserInputEnvelope
    set?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    disconnect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    delete?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    connect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    update?: MoodEntryUpdateWithWhereUniqueWithoutUserInput | MoodEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoodEntryUpdateManyWithWhereWithoutUserInput | MoodEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoodEntryScalarWhereInput | MoodEntryScalarWhereInput[]
  }

  export type OTPUpdateManyWithoutUserNestedInput = {
    create?: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput> | OTPCreateWithoutUserInput[] | OTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OTPCreateOrConnectWithoutUserInput | OTPCreateOrConnectWithoutUserInput[]
    upsert?: OTPUpsertWithWhereUniqueWithoutUserInput | OTPUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OTPCreateManyUserInputEnvelope
    set?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    disconnect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    delete?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    connect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    update?: OTPUpdateWithWhereUniqueWithoutUserInput | OTPUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OTPUpdateManyWithWhereWithoutUserInput | OTPUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OTPScalarWhereInput | OTPScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MoodEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoodEntryCreateWithoutUserInput, MoodEntryUncheckedCreateWithoutUserInput> | MoodEntryCreateWithoutUserInput[] | MoodEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodEntryCreateOrConnectWithoutUserInput | MoodEntryCreateOrConnectWithoutUserInput[]
    upsert?: MoodEntryUpsertWithWhereUniqueWithoutUserInput | MoodEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoodEntryCreateManyUserInputEnvelope
    set?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    disconnect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    delete?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    connect?: MoodEntryWhereUniqueInput | MoodEntryWhereUniqueInput[]
    update?: MoodEntryUpdateWithWhereUniqueWithoutUserInput | MoodEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoodEntryUpdateManyWithWhereWithoutUserInput | MoodEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoodEntryScalarWhereInput | MoodEntryScalarWhereInput[]
  }

  export type OTPUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput> | OTPCreateWithoutUserInput[] | OTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OTPCreateOrConnectWithoutUserInput | OTPCreateOrConnectWithoutUserInput[]
    upsert?: OTPUpsertWithWhereUniqueWithoutUserInput | OTPUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OTPCreateManyUserInputEnvelope
    set?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    disconnect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    delete?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    connect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    update?: OTPUpdateWithWhereUniqueWithoutUserInput | OTPUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OTPUpdateManyWithWhereWithoutUserInput | OTPUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OTPScalarWhereInput | OTPScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMoodEntriesInput = {
    create?: XOR<UserCreateWithoutMoodEntriesInput, UserUncheckedCreateWithoutMoodEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoodEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutMoodEntriesNestedInput = {
    create?: XOR<UserCreateWithoutMoodEntriesInput, UserUncheckedCreateWithoutMoodEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoodEntriesInput
    upsert?: UserUpsertWithoutMoodEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMoodEntriesInput, UserUpdateWithoutMoodEntriesInput>, UserUncheckedUpdateWithoutMoodEntriesInput>
  }

  export type UserCreateNestedOneWithoutOtpInput = {
    create?: XOR<UserCreateWithoutOtpInput, UserUncheckedCreateWithoutOtpInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOtpNestedInput = {
    create?: XOR<UserCreateWithoutOtpInput, UserUncheckedCreateWithoutOtpInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpInput
    upsert?: UserUpsertWithoutOtpInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOtpInput, UserUpdateWithoutOtpInput>, UserUncheckedUpdateWithoutOtpInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MoodEntryCreateWithoutUserInput = {
    date: Date | string
    mood: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MoodEntryUncheckedCreateWithoutUserInput = {
    id?: number
    date: Date | string
    mood: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MoodEntryCreateOrConnectWithoutUserInput = {
    where: MoodEntryWhereUniqueInput
    create: XOR<MoodEntryCreateWithoutUserInput, MoodEntryUncheckedCreateWithoutUserInput>
  }

  export type MoodEntryCreateManyUserInputEnvelope = {
    data: MoodEntryCreateManyUserInput | MoodEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OTPCreateWithoutUserInput = {
    otp: number
    createdAt?: Date | string
  }

  export type OTPUncheckedCreateWithoutUserInput = {
    id?: number
    otp: number
    createdAt?: Date | string
  }

  export type OTPCreateOrConnectWithoutUserInput = {
    where: OTPWhereUniqueInput
    create: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput>
  }

  export type OTPCreateManyUserInputEnvelope = {
    data: OTPCreateManyUserInput | OTPCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MoodEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: MoodEntryWhereUniqueInput
    update: XOR<MoodEntryUpdateWithoutUserInput, MoodEntryUncheckedUpdateWithoutUserInput>
    create: XOR<MoodEntryCreateWithoutUserInput, MoodEntryUncheckedCreateWithoutUserInput>
  }

  export type MoodEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: MoodEntryWhereUniqueInput
    data: XOR<MoodEntryUpdateWithoutUserInput, MoodEntryUncheckedUpdateWithoutUserInput>
  }

  export type MoodEntryUpdateManyWithWhereWithoutUserInput = {
    where: MoodEntryScalarWhereInput
    data: XOR<MoodEntryUpdateManyMutationInput, MoodEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type MoodEntryScalarWhereInput = {
    AND?: MoodEntryScalarWhereInput | MoodEntryScalarWhereInput[]
    OR?: MoodEntryScalarWhereInput[]
    NOT?: MoodEntryScalarWhereInput | MoodEntryScalarWhereInput[]
    id?: IntFilter<"MoodEntry"> | number
    userId?: IntFilter<"MoodEntry"> | number
    date?: DateTimeFilter<"MoodEntry"> | Date | string
    mood?: StringFilter<"MoodEntry"> | string
    note?: StringNullableFilter<"MoodEntry"> | string | null
    createdAt?: DateTimeFilter<"MoodEntry"> | Date | string
    updatedAt?: DateTimeFilter<"MoodEntry"> | Date | string
  }

  export type OTPUpsertWithWhereUniqueWithoutUserInput = {
    where: OTPWhereUniqueInput
    update: XOR<OTPUpdateWithoutUserInput, OTPUncheckedUpdateWithoutUserInput>
    create: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput>
  }

  export type OTPUpdateWithWhereUniqueWithoutUserInput = {
    where: OTPWhereUniqueInput
    data: XOR<OTPUpdateWithoutUserInput, OTPUncheckedUpdateWithoutUserInput>
  }

  export type OTPUpdateManyWithWhereWithoutUserInput = {
    where: OTPScalarWhereInput
    data: XOR<OTPUpdateManyMutationInput, OTPUncheckedUpdateManyWithoutUserInput>
  }

  export type OTPScalarWhereInput = {
    AND?: OTPScalarWhereInput | OTPScalarWhereInput[]
    OR?: OTPScalarWhereInput[]
    NOT?: OTPScalarWhereInput | OTPScalarWhereInput[]
    id?: IntFilter<"OTP"> | number
    otp?: IntFilter<"OTP"> | number
    createdAt?: DateTimeFilter<"OTP"> | Date | string
    userId?: IntFilter<"OTP"> | number
  }

  export type UserCreateWithoutMoodEntriesInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: OTPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMoodEntriesInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMoodEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMoodEntriesInput, UserUncheckedCreateWithoutMoodEntriesInput>
  }

  export type UserUpsertWithoutMoodEntriesInput = {
    update: XOR<UserUpdateWithoutMoodEntriesInput, UserUncheckedUpdateWithoutMoodEntriesInput>
    create: XOR<UserCreateWithoutMoodEntriesInput, UserUncheckedCreateWithoutMoodEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMoodEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMoodEntriesInput, UserUncheckedUpdateWithoutMoodEntriesInput>
  }

  export type UserUpdateWithoutMoodEntriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: OTPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMoodEntriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: OTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOtpInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moodEntries?: MoodEntryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOtpInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moodEntries?: MoodEntryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOtpInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOtpInput, UserUncheckedCreateWithoutOtpInput>
  }

  export type UserUpsertWithoutOtpInput = {
    update: XOR<UserUpdateWithoutOtpInput, UserUncheckedUpdateWithoutOtpInput>
    create: XOR<UserCreateWithoutOtpInput, UserUncheckedCreateWithoutOtpInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOtpInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOtpInput, UserUncheckedUpdateWithoutOtpInput>
  }

  export type UserUpdateWithoutOtpInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moodEntries?: MoodEntryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOtpInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moodEntries?: MoodEntryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MoodEntryCreateManyUserInput = {
    id?: number
    date: Date | string
    mood: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OTPCreateManyUserInput = {
    id?: number
    otp: number
    createdAt?: Date | string
  }

  export type MoodEntryUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mood?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodEntryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mood?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodEntryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mood?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPUpdateWithoutUserInput = {
    otp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}