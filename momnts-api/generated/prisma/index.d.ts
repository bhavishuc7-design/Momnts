
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventAccess
 * 
 */
export type EventAccess = $Result.DefaultSelection<Prisma.$EventAccessPayload>
/**
 * Model Photo
 * 
 */
export type Photo = $Result.DefaultSelection<Prisma.$PhotoPayload>
/**
 * Model FaceProfile
 * 
 */
export type FaceProfile = $Result.DefaultSelection<Prisma.$FaceProfilePayload>
/**
 * Model PhotoFace
 * 
 */
export type PhotoFace = $Result.DefaultSelection<Prisma.$PhotoFacePayload>
/**
 * Model Blacklist
 * 
 */
export type Blacklist = $Result.DefaultSelection<Prisma.$BlacklistPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ORGANIZER: 'ORGANIZER',
  ATTENDEE: 'ATTENDEE'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
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
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventAccess`: Exposes CRUD operations for the **EventAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventAccesses
    * const eventAccesses = await prisma.eventAccess.findMany()
    * ```
    */
  get eventAccess(): Prisma.EventAccessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.PhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.faceProfile`: Exposes CRUD operations for the **FaceProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FaceProfiles
    * const faceProfiles = await prisma.faceProfile.findMany()
    * ```
    */
  get faceProfile(): Prisma.FaceProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photoFace`: Exposes CRUD operations for the **PhotoFace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhotoFaces
    * const photoFaces = await prisma.photoFace.findMany()
    * ```
    */
  get photoFace(): Prisma.PhotoFaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blacklist`: Exposes CRUD operations for the **Blacklist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blacklists
    * const blacklists = await prisma.blacklist.findMany()
    * ```
    */
  get blacklist(): Prisma.BlacklistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Event: 'Event',
    EventAccess: 'EventAccess',
    Photo: 'Photo',
    FaceProfile: 'FaceProfile',
    PhotoFace: 'PhotoFace',
    Blacklist: 'Blacklist',
    RefreshToken: 'RefreshToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "event" | "eventAccess" | "photo" | "faceProfile" | "photoFace" | "blacklist" | "refreshToken"
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
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventAccess: {
        payload: Prisma.$EventAccessPayload<ExtArgs>
        fields: Prisma.EventAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAccessPayload>
          }
          findFirst: {
            args: Prisma.EventAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAccessPayload>
          }
          findMany: {
            args: Prisma.EventAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAccessPayload>[]
          }
          create: {
            args: Prisma.EventAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAccessPayload>
          }
          createMany: {
            args: Prisma.EventAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventAccessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAccessPayload>[]
          }
          delete: {
            args: Prisma.EventAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAccessPayload>
          }
          update: {
            args: Prisma.EventAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAccessPayload>
          }
          deleteMany: {
            args: Prisma.EventAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventAccessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAccessPayload>[]
          }
          upsert: {
            args: Prisma.EventAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAccessPayload>
          }
          aggregate: {
            args: Prisma.EventAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventAccess>
          }
          groupBy: {
            args: Prisma.EventAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventAccessCountArgs<ExtArgs>
            result: $Utils.Optional<EventAccessCountAggregateOutputType> | number
          }
        }
      }
      Photo: {
        payload: Prisma.$PhotoPayload<ExtArgs>
        fields: Prisma.PhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findFirst: {
            args: Prisma.PhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findMany: {
            args: Prisma.PhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          create: {
            args: Prisma.PhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          createMany: {
            args: Prisma.PhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          delete: {
            args: Prisma.PhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          update: {
            args: Prisma.PhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          upsert: {
            args: Prisma.PhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          aggregate: {
            args: Prisma.PhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoto>
          }
          groupBy: {
            args: Prisma.PhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoCountAggregateOutputType> | number
          }
        }
      }
      FaceProfile: {
        payload: Prisma.$FaceProfilePayload<ExtArgs>
        fields: Prisma.FaceProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FaceProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaceProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FaceProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaceProfilePayload>
          }
          findFirst: {
            args: Prisma.FaceProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaceProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FaceProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaceProfilePayload>
          }
          findMany: {
            args: Prisma.FaceProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaceProfilePayload>[]
          }
          delete: {
            args: Prisma.FaceProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaceProfilePayload>
          }
          update: {
            args: Prisma.FaceProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaceProfilePayload>
          }
          deleteMany: {
            args: Prisma.FaceProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FaceProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FaceProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaceProfilePayload>[]
          }
          aggregate: {
            args: Prisma.FaceProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFaceProfile>
          }
          groupBy: {
            args: Prisma.FaceProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FaceProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FaceProfileCountArgs<ExtArgs>
            result: $Utils.Optional<FaceProfileCountAggregateOutputType> | number
          }
        }
      }
      PhotoFace: {
        payload: Prisma.$PhotoFacePayload<ExtArgs>
        fields: Prisma.PhotoFaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoFacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoFacePayload>
          }
          findFirst: {
            args: Prisma.PhotoFaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoFacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoFacePayload>
          }
          findMany: {
            args: Prisma.PhotoFaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoFacePayload>[]
          }
          create: {
            args: Prisma.PhotoFaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoFacePayload>
          }
          createMany: {
            args: Prisma.PhotoFaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotoFaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoFacePayload>[]
          }
          delete: {
            args: Prisma.PhotoFaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoFacePayload>
          }
          update: {
            args: Prisma.PhotoFaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoFacePayload>
          }
          deleteMany: {
            args: Prisma.PhotoFaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoFaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhotoFaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoFacePayload>[]
          }
          upsert: {
            args: Prisma.PhotoFaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoFacePayload>
          }
          aggregate: {
            args: Prisma.PhotoFaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhotoFace>
          }
          groupBy: {
            args: Prisma.PhotoFaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoFaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoFaceCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoFaceCountAggregateOutputType> | number
          }
        }
      }
      Blacklist: {
        payload: Prisma.$BlacklistPayload<ExtArgs>
        fields: Prisma.BlacklistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlacklistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlacklistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>
          }
          findFirst: {
            args: Prisma.BlacklistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlacklistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>
          }
          findMany: {
            args: Prisma.BlacklistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>[]
          }
          create: {
            args: Prisma.BlacklistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>
          }
          createMany: {
            args: Prisma.BlacklistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlacklistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>[]
          }
          delete: {
            args: Prisma.BlacklistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>
          }
          update: {
            args: Prisma.BlacklistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>
          }
          deleteMany: {
            args: Prisma.BlacklistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlacklistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlacklistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>[]
          }
          upsert: {
            args: Prisma.BlacklistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>
          }
          aggregate: {
            args: Prisma.BlacklistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlacklist>
          }
          groupBy: {
            args: Prisma.BlacklistGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlacklistGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlacklistCountArgs<ExtArgs>
            result: $Utils.Optional<BlacklistCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    event?: EventOmit
    eventAccess?: EventAccessOmit
    photo?: PhotoOmit
    faceProfile?: FaceProfileOmit
    photoFace?: PhotoFaceOmit
    blacklist?: BlacklistOmit
    refreshToken?: RefreshTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    events: number
    event_access: number
    photos: number
    claimed_profiles: number
    refreshTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | UserCountOutputTypeCountEventsArgs
    event_access?: boolean | UserCountOutputTypeCountEvent_accessArgs
    photos?: boolean | UserCountOutputTypeCountPhotosArgs
    claimed_profiles?: boolean | UserCountOutputTypeCountClaimed_profilesArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
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
  export type UserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEvent_accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventAccessWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClaimed_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaceProfileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    event_access: number
    photos: number
    face_profiles: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event_access?: boolean | EventCountOutputTypeCountEvent_accessArgs
    photos?: boolean | EventCountOutputTypeCountPhotosArgs
    face_profiles?: boolean | EventCountOutputTypeCountFace_profilesArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountEvent_accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventAccessWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountFace_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaceProfileWhereInput
  }


  /**
   * Count Type PhotoCountOutputType
   */

  export type PhotoCountOutputType = {
    photo_faces: number
  }

  export type PhotoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photo_faces?: boolean | PhotoCountOutputTypeCountPhoto_facesArgs
  }

  // Custom InputTypes
  /**
   * PhotoCountOutputType without action
   */
  export type PhotoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCountOutputType
     */
    select?: PhotoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PhotoCountOutputType without action
   */
  export type PhotoCountOutputTypeCountPhoto_facesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoFaceWhereInput
  }


  /**
   * Count Type FaceProfileCountOutputType
   */

  export type FaceProfileCountOutputType = {
    photo_faces: number
  }

  export type FaceProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photo_faces?: boolean | FaceProfileCountOutputTypeCountPhoto_facesArgs
  }

  // Custom InputTypes
  /**
   * FaceProfileCountOutputType without action
   */
  export type FaceProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaceProfileCountOutputType
     */
    select?: FaceProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FaceProfileCountOutputType without action
   */
  export type FaceProfileCountOutputTypeCountPhoto_facesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoFaceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password_hash: number
    created_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    created_at?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password_hash: string
    created_at: Date
    _count: UserCountAggregateOutputType | null
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
    password_hash?: boolean
    created_at?: boolean
    events?: boolean | User$eventsArgs<ExtArgs>
    event_access?: boolean | User$event_accessArgs<ExtArgs>
    photos?: boolean | User$photosArgs<ExtArgs>
    claimed_profiles?: boolean | User$claimed_profilesArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password_hash" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | User$eventsArgs<ExtArgs>
    event_access?: boolean | User$event_accessArgs<ExtArgs>
    photos?: boolean | User$photosArgs<ExtArgs>
    claimed_profiles?: boolean | User$claimed_profilesArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
      event_access: Prisma.$EventAccessPayload<ExtArgs>[]
      photos: Prisma.$PhotoPayload<ExtArgs>[]
      claimed_profiles: Prisma.$FaceProfilePayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password_hash: string
      created_at: Date
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
    events<T extends User$eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    event_access<T extends User$event_accessArgs<ExtArgs> = {}>(args?: Subset<T, User$event_accessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    photos<T extends User$photosArgs<ExtArgs> = {}>(args?: Subset<T, User$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    claimed_profiles<T extends User$claimed_profilesArgs<ExtArgs> = {}>(args?: Subset<T, User$claimed_profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaceProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.events
   */
  export type User$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.event_access
   */
  export type User$event_accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAccess
     */
    select?: EventAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAccess
     */
    omit?: EventAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAccessInclude<ExtArgs> | null
    where?: EventAccessWhereInput
    orderBy?: EventAccessOrderByWithRelationInput | EventAccessOrderByWithRelationInput[]
    cursor?: EventAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventAccessScalarFieldEnum | EventAccessScalarFieldEnum[]
  }

  /**
   * User.photos
   */
  export type User$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * User.claimed_profiles
   */
  export type User$claimed_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaceProfile
     */
    select?: FaceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FaceProfile
     */
    omit?: FaceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaceProfileInclude<ExtArgs> | null
    where?: FaceProfileWhereInput
    orderBy?: FaceProfileOrderByWithRelationInput | FaceProfileOrderByWithRelationInput[]
    cursor?: FaceProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FaceProfileScalarFieldEnum | FaceProfileScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
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
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    attendee_upload_limit: number | null
  }

  export type EventSumAggregateOutputType = {
    attendee_upload_limit: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    name: string | null
    location: string | null
    date: Date | null
    invite_code: string | null
    is_active: boolean | null
    attendee_upload_limit: number | null
    created_at: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    name: string | null
    location: string | null
    date: Date | null
    invite_code: string | null
    is_active: boolean | null
    attendee_upload_limit: number | null
    created_at: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    location: number
    date: number
    invite_code: number
    is_active: number
    attendee_upload_limit: number
    created_at: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    attendee_upload_limit?: true
  }

  export type EventSumAggregateInputType = {
    attendee_upload_limit?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    location?: true
    date?: true
    invite_code?: true
    is_active?: true
    attendee_upload_limit?: true
    created_at?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    location?: true
    date?: true
    invite_code?: true
    is_active?: true
    attendee_upload_limit?: true
    created_at?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    location?: true
    date?: true
    invite_code?: true
    is_active?: true
    attendee_upload_limit?: true
    created_at?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    user_id: string
    name: string
    location: string
    date: Date
    invite_code: string
    is_active: boolean
    attendee_upload_limit: number
    created_at: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    location?: boolean
    date?: boolean
    invite_code?: boolean
    is_active?: boolean
    attendee_upload_limit?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event_access?: boolean | Event$event_accessArgs<ExtArgs>
    photos?: boolean | Event$photosArgs<ExtArgs>
    face_profiles?: boolean | Event$face_profilesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    location?: boolean
    date?: boolean
    invite_code?: boolean
    is_active?: boolean
    attendee_upload_limit?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    location?: boolean
    date?: boolean
    invite_code?: boolean
    is_active?: boolean
    attendee_upload_limit?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    location?: boolean
    date?: boolean
    invite_code?: boolean
    is_active?: boolean
    attendee_upload_limit?: boolean
    created_at?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "location" | "date" | "invite_code" | "is_active" | "attendee_upload_limit" | "created_at", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event_access?: boolean | Event$event_accessArgs<ExtArgs>
    photos?: boolean | Event$photosArgs<ExtArgs>
    face_profiles?: boolean | Event$face_profilesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      event_access: Prisma.$EventAccessPayload<ExtArgs>[]
      photos: Prisma.$PhotoPayload<ExtArgs>[]
      face_profiles: Prisma.$FaceProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      name: string
      location: string
      date: Date
      invite_code: string
      is_active: boolean
      attendee_upload_limit: number
      created_at: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event_access<T extends Event$event_accessArgs<ExtArgs> = {}>(args?: Subset<T, Event$event_accessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    photos<T extends Event$photosArgs<ExtArgs> = {}>(args?: Subset<T, Event$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    face_profiles<T extends Event$face_profilesArgs<ExtArgs> = {}>(args?: Subset<T, Event$face_profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaceProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly user_id: FieldRef<"Event", 'String'>
    readonly name: FieldRef<"Event", 'String'>
    readonly location: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly invite_code: FieldRef<"Event", 'String'>
    readonly is_active: FieldRef<"Event", 'Boolean'>
    readonly attendee_upload_limit: FieldRef<"Event", 'Int'>
    readonly created_at: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.event_access
   */
  export type Event$event_accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAccess
     */
    select?: EventAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAccess
     */
    omit?: EventAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAccessInclude<ExtArgs> | null
    where?: EventAccessWhereInput
    orderBy?: EventAccessOrderByWithRelationInput | EventAccessOrderByWithRelationInput[]
    cursor?: EventAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventAccessScalarFieldEnum | EventAccessScalarFieldEnum[]
  }

  /**
   * Event.photos
   */
  export type Event$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Event.face_profiles
   */
  export type Event$face_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaceProfile
     */
    select?: FaceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FaceProfile
     */
    omit?: FaceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaceProfileInclude<ExtArgs> | null
    where?: FaceProfileWhereInput
    orderBy?: FaceProfileOrderByWithRelationInput | FaceProfileOrderByWithRelationInput[]
    cursor?: FaceProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FaceProfileScalarFieldEnum | FaceProfileScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventAccess
   */

  export type AggregateEventAccess = {
    _count: EventAccessCountAggregateOutputType | null
    _avg: EventAccessAvgAggregateOutputType | null
    _sum: EventAccessSumAggregateOutputType | null
    _min: EventAccessMinAggregateOutputType | null
    _max: EventAccessMaxAggregateOutputType | null
  }

  export type EventAccessAvgAggregateOutputType = {
    upload_count: number | null
  }

  export type EventAccessSumAggregateOutputType = {
    upload_count: number | null
  }

  export type EventAccessMinAggregateOutputType = {
    id: string | null
    event_id: string | null
    user_id: string | null
    role: $Enums.Role | null
    upload_count: number | null
    joined_at: Date | null
  }

  export type EventAccessMaxAggregateOutputType = {
    id: string | null
    event_id: string | null
    user_id: string | null
    role: $Enums.Role | null
    upload_count: number | null
    joined_at: Date | null
  }

  export type EventAccessCountAggregateOutputType = {
    id: number
    event_id: number
    user_id: number
    role: number
    upload_count: number
    joined_at: number
    _all: number
  }


  export type EventAccessAvgAggregateInputType = {
    upload_count?: true
  }

  export type EventAccessSumAggregateInputType = {
    upload_count?: true
  }

  export type EventAccessMinAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    role?: true
    upload_count?: true
    joined_at?: true
  }

  export type EventAccessMaxAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    role?: true
    upload_count?: true
    joined_at?: true
  }

  export type EventAccessCountAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    role?: true
    upload_count?: true
    joined_at?: true
    _all?: true
  }

  export type EventAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventAccess to aggregate.
     */
    where?: EventAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAccesses to fetch.
     */
    orderBy?: EventAccessOrderByWithRelationInput | EventAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventAccesses
    **/
    _count?: true | EventAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAccessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventAccessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventAccessMaxAggregateInputType
  }

  export type GetEventAccessAggregateType<T extends EventAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateEventAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventAccess[P]>
      : GetScalarType<T[P], AggregateEventAccess[P]>
  }




  export type EventAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventAccessWhereInput
    orderBy?: EventAccessOrderByWithAggregationInput | EventAccessOrderByWithAggregationInput[]
    by: EventAccessScalarFieldEnum[] | EventAccessScalarFieldEnum
    having?: EventAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventAccessCountAggregateInputType | true
    _avg?: EventAccessAvgAggregateInputType
    _sum?: EventAccessSumAggregateInputType
    _min?: EventAccessMinAggregateInputType
    _max?: EventAccessMaxAggregateInputType
  }

  export type EventAccessGroupByOutputType = {
    id: string
    event_id: string
    user_id: string
    role: $Enums.Role
    upload_count: number
    joined_at: Date
    _count: EventAccessCountAggregateOutputType | null
    _avg: EventAccessAvgAggregateOutputType | null
    _sum: EventAccessSumAggregateOutputType | null
    _min: EventAccessMinAggregateOutputType | null
    _max: EventAccessMaxAggregateOutputType | null
  }

  type GetEventAccessGroupByPayload<T extends EventAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventAccessGroupByOutputType[P]>
            : GetScalarType<T[P], EventAccessGroupByOutputType[P]>
        }
      >
    >


  export type EventAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    role?: boolean
    upload_count?: boolean
    joined_at?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventAccess"]>

  export type EventAccessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    role?: boolean
    upload_count?: boolean
    joined_at?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventAccess"]>

  export type EventAccessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    role?: boolean
    upload_count?: boolean
    joined_at?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventAccess"]>

  export type EventAccessSelectScalar = {
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    role?: boolean
    upload_count?: boolean
    joined_at?: boolean
  }

  export type EventAccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "user_id" | "role" | "upload_count" | "joined_at", ExtArgs["result"]["eventAccess"]>
  export type EventAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventAccessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventAccessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventAccess"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      event_id: string
      user_id: string
      role: $Enums.Role
      upload_count: number
      joined_at: Date
    }, ExtArgs["result"]["eventAccess"]>
    composites: {}
  }

  type EventAccessGetPayload<S extends boolean | null | undefined | EventAccessDefaultArgs> = $Result.GetResult<Prisma.$EventAccessPayload, S>

  type EventAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventAccessCountAggregateInputType | true
    }

  export interface EventAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventAccess'], meta: { name: 'EventAccess' } }
    /**
     * Find zero or one EventAccess that matches the filter.
     * @param {EventAccessFindUniqueArgs} args - Arguments to find a EventAccess
     * @example
     * // Get one EventAccess
     * const eventAccess = await prisma.eventAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventAccessFindUniqueArgs>(args: SelectSubset<T, EventAccessFindUniqueArgs<ExtArgs>>): Prisma__EventAccessClient<$Result.GetResult<Prisma.$EventAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventAccess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventAccessFindUniqueOrThrowArgs} args - Arguments to find a EventAccess
     * @example
     * // Get one EventAccess
     * const eventAccess = await prisma.eventAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, EventAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventAccessClient<$Result.GetResult<Prisma.$EventAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAccessFindFirstArgs} args - Arguments to find a EventAccess
     * @example
     * // Get one EventAccess
     * const eventAccess = await prisma.eventAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventAccessFindFirstArgs>(args?: SelectSubset<T, EventAccessFindFirstArgs<ExtArgs>>): Prisma__EventAccessClient<$Result.GetResult<Prisma.$EventAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAccessFindFirstOrThrowArgs} args - Arguments to find a EventAccess
     * @example
     * // Get one EventAccess
     * const eventAccess = await prisma.eventAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, EventAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventAccessClient<$Result.GetResult<Prisma.$EventAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventAccesses
     * const eventAccesses = await prisma.eventAccess.findMany()
     * 
     * // Get first 10 EventAccesses
     * const eventAccesses = await prisma.eventAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventAccessWithIdOnly = await prisma.eventAccess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventAccessFindManyArgs>(args?: SelectSubset<T, EventAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventAccess.
     * @param {EventAccessCreateArgs} args - Arguments to create a EventAccess.
     * @example
     * // Create one EventAccess
     * const EventAccess = await prisma.eventAccess.create({
     *   data: {
     *     // ... data to create a EventAccess
     *   }
     * })
     * 
     */
    create<T extends EventAccessCreateArgs>(args: SelectSubset<T, EventAccessCreateArgs<ExtArgs>>): Prisma__EventAccessClient<$Result.GetResult<Prisma.$EventAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventAccesses.
     * @param {EventAccessCreateManyArgs} args - Arguments to create many EventAccesses.
     * @example
     * // Create many EventAccesses
     * const eventAccess = await prisma.eventAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventAccessCreateManyArgs>(args?: SelectSubset<T, EventAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventAccesses and returns the data saved in the database.
     * @param {EventAccessCreateManyAndReturnArgs} args - Arguments to create many EventAccesses.
     * @example
     * // Create many EventAccesses
     * const eventAccess = await prisma.eventAccess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventAccesses and only return the `id`
     * const eventAccessWithIdOnly = await prisma.eventAccess.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventAccessCreateManyAndReturnArgs>(args?: SelectSubset<T, EventAccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventAccess.
     * @param {EventAccessDeleteArgs} args - Arguments to delete one EventAccess.
     * @example
     * // Delete one EventAccess
     * const EventAccess = await prisma.eventAccess.delete({
     *   where: {
     *     // ... filter to delete one EventAccess
     *   }
     * })
     * 
     */
    delete<T extends EventAccessDeleteArgs>(args: SelectSubset<T, EventAccessDeleteArgs<ExtArgs>>): Prisma__EventAccessClient<$Result.GetResult<Prisma.$EventAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventAccess.
     * @param {EventAccessUpdateArgs} args - Arguments to update one EventAccess.
     * @example
     * // Update one EventAccess
     * const eventAccess = await prisma.eventAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventAccessUpdateArgs>(args: SelectSubset<T, EventAccessUpdateArgs<ExtArgs>>): Prisma__EventAccessClient<$Result.GetResult<Prisma.$EventAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventAccesses.
     * @param {EventAccessDeleteManyArgs} args - Arguments to filter EventAccesses to delete.
     * @example
     * // Delete a few EventAccesses
     * const { count } = await prisma.eventAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventAccessDeleteManyArgs>(args?: SelectSubset<T, EventAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventAccesses
     * const eventAccess = await prisma.eventAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventAccessUpdateManyArgs>(args: SelectSubset<T, EventAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventAccesses and returns the data updated in the database.
     * @param {EventAccessUpdateManyAndReturnArgs} args - Arguments to update many EventAccesses.
     * @example
     * // Update many EventAccesses
     * const eventAccess = await prisma.eventAccess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventAccesses and only return the `id`
     * const eventAccessWithIdOnly = await prisma.eventAccess.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventAccessUpdateManyAndReturnArgs>(args: SelectSubset<T, EventAccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventAccess.
     * @param {EventAccessUpsertArgs} args - Arguments to update or create a EventAccess.
     * @example
     * // Update or create a EventAccess
     * const eventAccess = await prisma.eventAccess.upsert({
     *   create: {
     *     // ... data to create a EventAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventAccess we want to update
     *   }
     * })
     */
    upsert<T extends EventAccessUpsertArgs>(args: SelectSubset<T, EventAccessUpsertArgs<ExtArgs>>): Prisma__EventAccessClient<$Result.GetResult<Prisma.$EventAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAccessCountArgs} args - Arguments to filter EventAccesses to count.
     * @example
     * // Count the number of EventAccesses
     * const count = await prisma.eventAccess.count({
     *   where: {
     *     // ... the filter for the EventAccesses we want to count
     *   }
     * })
    **/
    count<T extends EventAccessCountArgs>(
      args?: Subset<T, EventAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAccessAggregateArgs>(args: Subset<T, EventAccessAggregateArgs>): Prisma.PrismaPromise<GetEventAccessAggregateType<T>>

    /**
     * Group by EventAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAccessGroupByArgs} args - Group by arguments.
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
      T extends EventAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventAccessGroupByArgs['orderBy'] }
        : { orderBy?: EventAccessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventAccess model
   */
  readonly fields: EventAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventAccess model
   */
  interface EventAccessFieldRefs {
    readonly id: FieldRef<"EventAccess", 'String'>
    readonly event_id: FieldRef<"EventAccess", 'String'>
    readonly user_id: FieldRef<"EventAccess", 'String'>
    readonly role: FieldRef<"EventAccess", 'Role'>
    readonly upload_count: FieldRef<"EventAccess", 'Int'>
    readonly joined_at: FieldRef<"EventAccess", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventAccess findUnique
   */
  export type EventAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAccess
     */
    select?: EventAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAccess
     */
    omit?: EventAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAccessInclude<ExtArgs> | null
    /**
     * Filter, which EventAccess to fetch.
     */
    where: EventAccessWhereUniqueInput
  }

  /**
   * EventAccess findUniqueOrThrow
   */
  export type EventAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAccess
     */
    select?: EventAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAccess
     */
    omit?: EventAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAccessInclude<ExtArgs> | null
    /**
     * Filter, which EventAccess to fetch.
     */
    where: EventAccessWhereUniqueInput
  }

  /**
   * EventAccess findFirst
   */
  export type EventAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAccess
     */
    select?: EventAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAccess
     */
    omit?: EventAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAccessInclude<ExtArgs> | null
    /**
     * Filter, which EventAccess to fetch.
     */
    where?: EventAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAccesses to fetch.
     */
    orderBy?: EventAccessOrderByWithRelationInput | EventAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventAccesses.
     */
    cursor?: EventAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventAccesses.
     */
    distinct?: EventAccessScalarFieldEnum | EventAccessScalarFieldEnum[]
  }

  /**
   * EventAccess findFirstOrThrow
   */
  export type EventAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAccess
     */
    select?: EventAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAccess
     */
    omit?: EventAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAccessInclude<ExtArgs> | null
    /**
     * Filter, which EventAccess to fetch.
     */
    where?: EventAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAccesses to fetch.
     */
    orderBy?: EventAccessOrderByWithRelationInput | EventAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventAccesses.
     */
    cursor?: EventAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventAccesses.
     */
    distinct?: EventAccessScalarFieldEnum | EventAccessScalarFieldEnum[]
  }

  /**
   * EventAccess findMany
   */
  export type EventAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAccess
     */
    select?: EventAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAccess
     */
    omit?: EventAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAccessInclude<ExtArgs> | null
    /**
     * Filter, which EventAccesses to fetch.
     */
    where?: EventAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAccesses to fetch.
     */
    orderBy?: EventAccessOrderByWithRelationInput | EventAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventAccesses.
     */
    cursor?: EventAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventAccesses.
     */
    distinct?: EventAccessScalarFieldEnum | EventAccessScalarFieldEnum[]
  }

  /**
   * EventAccess create
   */
  export type EventAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAccess
     */
    select?: EventAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAccess
     */
    omit?: EventAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a EventAccess.
     */
    data: XOR<EventAccessCreateInput, EventAccessUncheckedCreateInput>
  }

  /**
   * EventAccess createMany
   */
  export type EventAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventAccesses.
     */
    data: EventAccessCreateManyInput | EventAccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventAccess createManyAndReturn
   */
  export type EventAccessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAccess
     */
    select?: EventAccessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventAccess
     */
    omit?: EventAccessOmit<ExtArgs> | null
    /**
     * The data used to create many EventAccesses.
     */
    data: EventAccessCreateManyInput | EventAccessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAccessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventAccess update
   */
  export type EventAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAccess
     */
    select?: EventAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAccess
     */
    omit?: EventAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a EventAccess.
     */
    data: XOR<EventAccessUpdateInput, EventAccessUncheckedUpdateInput>
    /**
     * Choose, which EventAccess to update.
     */
    where: EventAccessWhereUniqueInput
  }

  /**
   * EventAccess updateMany
   */
  export type EventAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventAccesses.
     */
    data: XOR<EventAccessUpdateManyMutationInput, EventAccessUncheckedUpdateManyInput>
    /**
     * Filter which EventAccesses to update
     */
    where?: EventAccessWhereInput
    /**
     * Limit how many EventAccesses to update.
     */
    limit?: number
  }

  /**
   * EventAccess updateManyAndReturn
   */
  export type EventAccessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAccess
     */
    select?: EventAccessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventAccess
     */
    omit?: EventAccessOmit<ExtArgs> | null
    /**
     * The data used to update EventAccesses.
     */
    data: XOR<EventAccessUpdateManyMutationInput, EventAccessUncheckedUpdateManyInput>
    /**
     * Filter which EventAccesses to update
     */
    where?: EventAccessWhereInput
    /**
     * Limit how many EventAccesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAccessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventAccess upsert
   */
  export type EventAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAccess
     */
    select?: EventAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAccess
     */
    omit?: EventAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the EventAccess to update in case it exists.
     */
    where: EventAccessWhereUniqueInput
    /**
     * In case the EventAccess found by the `where` argument doesn't exist, create a new EventAccess with this data.
     */
    create: XOR<EventAccessCreateInput, EventAccessUncheckedCreateInput>
    /**
     * In case the EventAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventAccessUpdateInput, EventAccessUncheckedUpdateInput>
  }

  /**
   * EventAccess delete
   */
  export type EventAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAccess
     */
    select?: EventAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAccess
     */
    omit?: EventAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAccessInclude<ExtArgs> | null
    /**
     * Filter which EventAccess to delete.
     */
    where: EventAccessWhereUniqueInput
  }

  /**
   * EventAccess deleteMany
   */
  export type EventAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventAccesses to delete
     */
    where?: EventAccessWhereInput
    /**
     * Limit how many EventAccesses to delete.
     */
    limit?: number
  }

  /**
   * EventAccess without action
   */
  export type EventAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAccess
     */
    select?: EventAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAccess
     */
    omit?: EventAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAccessInclude<ExtArgs> | null
  }


  /**
   * Model Photo
   */

  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoMinAggregateOutputType = {
    id: string | null
    event_id: string | null
    user_id: string | null
    storage_url: string | null
    uploaded_at: Date | null
    processed: boolean | null
    is_visible: boolean | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: string | null
    event_id: string | null
    user_id: string | null
    storage_url: string | null
    uploaded_at: Date | null
    processed: boolean | null
    is_visible: boolean | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    event_id: number
    user_id: number
    storage_url: number
    uploaded_at: number
    processed: number
    is_visible: number
    _all: number
  }


  export type PhotoMinAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    storage_url?: true
    uploaded_at?: true
    processed?: true
    is_visible?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    storage_url?: true
    uploaded_at?: true
    processed?: true
    is_visible?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    storage_url?: true
    uploaded_at?: true
    processed?: true
    is_visible?: true
    _all?: true
  }

  export type PhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photo to aggregate.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type PhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithAggregationInput | PhotoOrderByWithAggregationInput[]
    by: PhotoScalarFieldEnum[] | PhotoScalarFieldEnum
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }

  export type PhotoGroupByOutputType = {
    id: string
    event_id: string
    user_id: string
    storage_url: string
    uploaded_at: Date
    processed: boolean
    is_visible: boolean
    _count: PhotoCountAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type PhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    storage_url?: boolean
    uploaded_at?: boolean
    processed?: boolean
    is_visible?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    photo_faces?: boolean | Photo$photo_facesArgs<ExtArgs>
    _count?: boolean | PhotoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    storage_url?: boolean
    uploaded_at?: boolean
    processed?: boolean
    is_visible?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    storage_url?: boolean
    uploaded_at?: boolean
    processed?: boolean
    is_visible?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectScalar = {
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    storage_url?: boolean
    uploaded_at?: boolean
    processed?: boolean
    is_visible?: boolean
  }

  export type PhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "user_id" | "storage_url" | "uploaded_at" | "processed" | "is_visible", ExtArgs["result"]["photo"]>
  export type PhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    photo_faces?: boolean | Photo$photo_facesArgs<ExtArgs>
    _count?: boolean | PhotoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photo"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      photo_faces: Prisma.$PhotoFacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      event_id: string
      user_id: string
      storage_url: string
      uploaded_at: Date
      processed: boolean
      is_visible: boolean
    }, ExtArgs["result"]["photo"]>
    composites: {}
  }

  type PhotoGetPayload<S extends boolean | null | undefined | PhotoDefaultArgs> = $Result.GetResult<Prisma.$PhotoPayload, S>

  type PhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoCountAggregateInputType | true
    }

  export interface PhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photo'], meta: { name: 'Photo' } }
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoFindUniqueArgs>(args: SelectSubset<T, PhotoFindUniqueArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Photo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoFindFirstArgs>(args?: SelectSubset<T, PhotoFindFirstArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoFindManyArgs>(args?: SelectSubset<T, PhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
     */
    create<T extends PhotoCreateArgs>(args: SelectSubset<T, PhotoCreateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Photos.
     * @param {PhotoCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoCreateManyArgs>(args?: SelectSubset<T, PhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Photos and returns the data saved in the database.
     * @param {PhotoCreateManyAndReturnArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, PhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
     */
    delete<T extends PhotoDeleteArgs>(args: SelectSubset<T, PhotoDeleteArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoUpdateArgs>(args: SelectSubset<T, PhotoUpdateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoDeleteManyArgs>(args?: SelectSubset<T, PhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoUpdateManyArgs>(args: SelectSubset<T, PhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos and returns the data updated in the database.
     * @param {PhotoUpdateManyAndReturnArgs} args - Arguments to update many Photos.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.updateManyAndReturn({
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
    updateManyAndReturn<T extends PhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, PhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
     */
    upsert<T extends PhotoUpsertArgs>(args: SelectSubset<T, PhotoUpsertArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): Prisma.PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
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
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photo model
   */
  readonly fields: PhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    photo_faces<T extends Photo$photo_facesArgs<ExtArgs> = {}>(args?: Subset<T, Photo$photo_facesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoFacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Photo model
   */
  interface PhotoFieldRefs {
    readonly id: FieldRef<"Photo", 'String'>
    readonly event_id: FieldRef<"Photo", 'String'>
    readonly user_id: FieldRef<"Photo", 'String'>
    readonly storage_url: FieldRef<"Photo", 'String'>
    readonly uploaded_at: FieldRef<"Photo", 'DateTime'>
    readonly processed: FieldRef<"Photo", 'Boolean'>
    readonly is_visible: FieldRef<"Photo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Photo findUnique
   */
  export type PhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findUniqueOrThrow
   */
  export type PhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findFirst
   */
  export type PhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findFirstOrThrow
   */
  export type PhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo create
   */
  export type PhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Photo.
     */
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }

  /**
   * Photo createMany
   */
  export type PhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Photo createManyAndReturn
   */
  export type PhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo update
   */
  export type PhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Photo.
     */
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
  }

  /**
   * Photo updateManyAndReturn
   */
  export type PhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Photo to update in case it exists.
     */
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     */
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }

  /**
   * Photo delete
   */
  export type PhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter which Photo to delete.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to delete.
     */
    limit?: number
  }

  /**
   * Photo.photo_faces
   */
  export type Photo$photo_facesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFace
     */
    select?: PhotoFaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFace
     */
    omit?: PhotoFaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFaceInclude<ExtArgs> | null
    where?: PhotoFaceWhereInput
    orderBy?: PhotoFaceOrderByWithRelationInput | PhotoFaceOrderByWithRelationInput[]
    cursor?: PhotoFaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoFaceScalarFieldEnum | PhotoFaceScalarFieldEnum[]
  }

  /**
   * Photo without action
   */
  export type PhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
  }


  /**
   * Model FaceProfile
   */

  export type AggregateFaceProfile = {
    _count: FaceProfileCountAggregateOutputType | null
    _min: FaceProfileMinAggregateOutputType | null
    _max: FaceProfileMaxAggregateOutputType | null
  }

  export type FaceProfileMinAggregateOutputType = {
    id: string | null
    event_id: string | null
    claimed_by: string | null
    is_calimed: boolean | null
  }

  export type FaceProfileMaxAggregateOutputType = {
    id: string | null
    event_id: string | null
    claimed_by: string | null
    is_calimed: boolean | null
  }

  export type FaceProfileCountAggregateOutputType = {
    id: number
    event_id: number
    claimed_by: number
    is_calimed: number
    _all: number
  }


  export type FaceProfileMinAggregateInputType = {
    id?: true
    event_id?: true
    claimed_by?: true
    is_calimed?: true
  }

  export type FaceProfileMaxAggregateInputType = {
    id?: true
    event_id?: true
    claimed_by?: true
    is_calimed?: true
  }

  export type FaceProfileCountAggregateInputType = {
    id?: true
    event_id?: true
    claimed_by?: true
    is_calimed?: true
    _all?: true
  }

  export type FaceProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FaceProfile to aggregate.
     */
    where?: FaceProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FaceProfiles to fetch.
     */
    orderBy?: FaceProfileOrderByWithRelationInput | FaceProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FaceProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FaceProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FaceProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FaceProfiles
    **/
    _count?: true | FaceProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FaceProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FaceProfileMaxAggregateInputType
  }

  export type GetFaceProfileAggregateType<T extends FaceProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateFaceProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaceProfile[P]>
      : GetScalarType<T[P], AggregateFaceProfile[P]>
  }




  export type FaceProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaceProfileWhereInput
    orderBy?: FaceProfileOrderByWithAggregationInput | FaceProfileOrderByWithAggregationInput[]
    by: FaceProfileScalarFieldEnum[] | FaceProfileScalarFieldEnum
    having?: FaceProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FaceProfileCountAggregateInputType | true
    _min?: FaceProfileMinAggregateInputType
    _max?: FaceProfileMaxAggregateInputType
  }

  export type FaceProfileGroupByOutputType = {
    id: string
    event_id: string
    claimed_by: string | null
    is_calimed: boolean
    _count: FaceProfileCountAggregateOutputType | null
    _min: FaceProfileMinAggregateOutputType | null
    _max: FaceProfileMaxAggregateOutputType | null
  }

  type GetFaceProfileGroupByPayload<T extends FaceProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FaceProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FaceProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FaceProfileGroupByOutputType[P]>
            : GetScalarType<T[P], FaceProfileGroupByOutputType[P]>
        }
      >
    >


  export type FaceProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    claimed_by?: boolean
    is_calimed?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    claimed?: boolean | FaceProfile$claimedArgs<ExtArgs>
    photo_faces?: boolean | FaceProfile$photo_facesArgs<ExtArgs>
    _count?: boolean | FaceProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["faceProfile"]>


  export type FaceProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    claimed_by?: boolean
    is_calimed?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    claimed?: boolean | FaceProfile$claimedArgs<ExtArgs>
  }, ExtArgs["result"]["faceProfile"]>

  export type FaceProfileSelectScalar = {
    id?: boolean
    event_id?: boolean
    claimed_by?: boolean
    is_calimed?: boolean
  }

  export type FaceProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "claimed_by" | "is_calimed", ExtArgs["result"]["faceProfile"]>
  export type FaceProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    claimed?: boolean | FaceProfile$claimedArgs<ExtArgs>
    photo_faces?: boolean | FaceProfile$photo_facesArgs<ExtArgs>
    _count?: boolean | FaceProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FaceProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    claimed?: boolean | FaceProfile$claimedArgs<ExtArgs>
  }

  export type $FaceProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FaceProfile"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      claimed: Prisma.$UserPayload<ExtArgs> | null
      photo_faces: Prisma.$PhotoFacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      event_id: string
      claimed_by: string | null
      is_calimed: boolean
    }, ExtArgs["result"]["faceProfile"]>
    composites: {}
  }

  type FaceProfileGetPayload<S extends boolean | null | undefined | FaceProfileDefaultArgs> = $Result.GetResult<Prisma.$FaceProfilePayload, S>

  type FaceProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FaceProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FaceProfileCountAggregateInputType | true
    }

  export interface FaceProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FaceProfile'], meta: { name: 'FaceProfile' } }
    /**
     * Find zero or one FaceProfile that matches the filter.
     * @param {FaceProfileFindUniqueArgs} args - Arguments to find a FaceProfile
     * @example
     * // Get one FaceProfile
     * const faceProfile = await prisma.faceProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FaceProfileFindUniqueArgs>(args: SelectSubset<T, FaceProfileFindUniqueArgs<ExtArgs>>): Prisma__FaceProfileClient<$Result.GetResult<Prisma.$FaceProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FaceProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FaceProfileFindUniqueOrThrowArgs} args - Arguments to find a FaceProfile
     * @example
     * // Get one FaceProfile
     * const faceProfile = await prisma.faceProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FaceProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, FaceProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FaceProfileClient<$Result.GetResult<Prisma.$FaceProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FaceProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaceProfileFindFirstArgs} args - Arguments to find a FaceProfile
     * @example
     * // Get one FaceProfile
     * const faceProfile = await prisma.faceProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FaceProfileFindFirstArgs>(args?: SelectSubset<T, FaceProfileFindFirstArgs<ExtArgs>>): Prisma__FaceProfileClient<$Result.GetResult<Prisma.$FaceProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FaceProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaceProfileFindFirstOrThrowArgs} args - Arguments to find a FaceProfile
     * @example
     * // Get one FaceProfile
     * const faceProfile = await prisma.faceProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FaceProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, FaceProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FaceProfileClient<$Result.GetResult<Prisma.$FaceProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FaceProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaceProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FaceProfiles
     * const faceProfiles = await prisma.faceProfile.findMany()
     * 
     * // Get first 10 FaceProfiles
     * const faceProfiles = await prisma.faceProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const faceProfileWithIdOnly = await prisma.faceProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FaceProfileFindManyArgs>(args?: SelectSubset<T, FaceProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaceProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Delete a FaceProfile.
     * @param {FaceProfileDeleteArgs} args - Arguments to delete one FaceProfile.
     * @example
     * // Delete one FaceProfile
     * const FaceProfile = await prisma.faceProfile.delete({
     *   where: {
     *     // ... filter to delete one FaceProfile
     *   }
     * })
     * 
     */
    delete<T extends FaceProfileDeleteArgs>(args: SelectSubset<T, FaceProfileDeleteArgs<ExtArgs>>): Prisma__FaceProfileClient<$Result.GetResult<Prisma.$FaceProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FaceProfile.
     * @param {FaceProfileUpdateArgs} args - Arguments to update one FaceProfile.
     * @example
     * // Update one FaceProfile
     * const faceProfile = await prisma.faceProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FaceProfileUpdateArgs>(args: SelectSubset<T, FaceProfileUpdateArgs<ExtArgs>>): Prisma__FaceProfileClient<$Result.GetResult<Prisma.$FaceProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FaceProfiles.
     * @param {FaceProfileDeleteManyArgs} args - Arguments to filter FaceProfiles to delete.
     * @example
     * // Delete a few FaceProfiles
     * const { count } = await prisma.faceProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FaceProfileDeleteManyArgs>(args?: SelectSubset<T, FaceProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FaceProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaceProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FaceProfiles
     * const faceProfile = await prisma.faceProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FaceProfileUpdateManyArgs>(args: SelectSubset<T, FaceProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FaceProfiles and returns the data updated in the database.
     * @param {FaceProfileUpdateManyAndReturnArgs} args - Arguments to update many FaceProfiles.
     * @example
     * // Update many FaceProfiles
     * const faceProfile = await prisma.faceProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FaceProfiles and only return the `id`
     * const faceProfileWithIdOnly = await prisma.faceProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends FaceProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, FaceProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaceProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>


    /**
     * Count the number of FaceProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaceProfileCountArgs} args - Arguments to filter FaceProfiles to count.
     * @example
     * // Count the number of FaceProfiles
     * const count = await prisma.faceProfile.count({
     *   where: {
     *     // ... the filter for the FaceProfiles we want to count
     *   }
     * })
    **/
    count<T extends FaceProfileCountArgs>(
      args?: Subset<T, FaceProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FaceProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FaceProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaceProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FaceProfileAggregateArgs>(args: Subset<T, FaceProfileAggregateArgs>): Prisma.PrismaPromise<GetFaceProfileAggregateType<T>>

    /**
     * Group by FaceProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaceProfileGroupByArgs} args - Group by arguments.
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
      T extends FaceProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FaceProfileGroupByArgs['orderBy'] }
        : { orderBy?: FaceProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FaceProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaceProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FaceProfile model
   */
  readonly fields: FaceProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FaceProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FaceProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    claimed<T extends FaceProfile$claimedArgs<ExtArgs> = {}>(args?: Subset<T, FaceProfile$claimedArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    photo_faces<T extends FaceProfile$photo_facesArgs<ExtArgs> = {}>(args?: Subset<T, FaceProfile$photo_facesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoFacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FaceProfile model
   */
  interface FaceProfileFieldRefs {
    readonly id: FieldRef<"FaceProfile", 'String'>
    readonly event_id: FieldRef<"FaceProfile", 'String'>
    readonly claimed_by: FieldRef<"FaceProfile", 'String'>
    readonly is_calimed: FieldRef<"FaceProfile", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * FaceProfile findUnique
   */
  export type FaceProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaceProfile
     */
    select?: FaceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FaceProfile
     */
    omit?: FaceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaceProfileInclude<ExtArgs> | null
    /**
     * Filter, which FaceProfile to fetch.
     */
    where: FaceProfileWhereUniqueInput
  }

  /**
   * FaceProfile findUniqueOrThrow
   */
  export type FaceProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaceProfile
     */
    select?: FaceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FaceProfile
     */
    omit?: FaceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaceProfileInclude<ExtArgs> | null
    /**
     * Filter, which FaceProfile to fetch.
     */
    where: FaceProfileWhereUniqueInput
  }

  /**
   * FaceProfile findFirst
   */
  export type FaceProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaceProfile
     */
    select?: FaceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FaceProfile
     */
    omit?: FaceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaceProfileInclude<ExtArgs> | null
    /**
     * Filter, which FaceProfile to fetch.
     */
    where?: FaceProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FaceProfiles to fetch.
     */
    orderBy?: FaceProfileOrderByWithRelationInput | FaceProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FaceProfiles.
     */
    cursor?: FaceProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FaceProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FaceProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FaceProfiles.
     */
    distinct?: FaceProfileScalarFieldEnum | FaceProfileScalarFieldEnum[]
  }

  /**
   * FaceProfile findFirstOrThrow
   */
  export type FaceProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaceProfile
     */
    select?: FaceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FaceProfile
     */
    omit?: FaceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaceProfileInclude<ExtArgs> | null
    /**
     * Filter, which FaceProfile to fetch.
     */
    where?: FaceProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FaceProfiles to fetch.
     */
    orderBy?: FaceProfileOrderByWithRelationInput | FaceProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FaceProfiles.
     */
    cursor?: FaceProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FaceProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FaceProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FaceProfiles.
     */
    distinct?: FaceProfileScalarFieldEnum | FaceProfileScalarFieldEnum[]
  }

  /**
   * FaceProfile findMany
   */
  export type FaceProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaceProfile
     */
    select?: FaceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FaceProfile
     */
    omit?: FaceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaceProfileInclude<ExtArgs> | null
    /**
     * Filter, which FaceProfiles to fetch.
     */
    where?: FaceProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FaceProfiles to fetch.
     */
    orderBy?: FaceProfileOrderByWithRelationInput | FaceProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FaceProfiles.
     */
    cursor?: FaceProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FaceProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FaceProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FaceProfiles.
     */
    distinct?: FaceProfileScalarFieldEnum | FaceProfileScalarFieldEnum[]
  }

  /**
   * FaceProfile update
   */
  export type FaceProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaceProfile
     */
    select?: FaceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FaceProfile
     */
    omit?: FaceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaceProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a FaceProfile.
     */
    data: XOR<FaceProfileUpdateInput, FaceProfileUncheckedUpdateInput>
    /**
     * Choose, which FaceProfile to update.
     */
    where: FaceProfileWhereUniqueInput
  }

  /**
   * FaceProfile updateMany
   */
  export type FaceProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FaceProfiles.
     */
    data: XOR<FaceProfileUpdateManyMutationInput, FaceProfileUncheckedUpdateManyInput>
    /**
     * Filter which FaceProfiles to update
     */
    where?: FaceProfileWhereInput
    /**
     * Limit how many FaceProfiles to update.
     */
    limit?: number
  }

  /**
   * FaceProfile updateManyAndReturn
   */
  export type FaceProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaceProfile
     */
    select?: FaceProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FaceProfile
     */
    omit?: FaceProfileOmit<ExtArgs> | null
    /**
     * The data used to update FaceProfiles.
     */
    data: XOR<FaceProfileUpdateManyMutationInput, FaceProfileUncheckedUpdateManyInput>
    /**
     * Filter which FaceProfiles to update
     */
    where?: FaceProfileWhereInput
    /**
     * Limit how many FaceProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaceProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FaceProfile delete
   */
  export type FaceProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaceProfile
     */
    select?: FaceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FaceProfile
     */
    omit?: FaceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaceProfileInclude<ExtArgs> | null
    /**
     * Filter which FaceProfile to delete.
     */
    where: FaceProfileWhereUniqueInput
  }

  /**
   * FaceProfile deleteMany
   */
  export type FaceProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FaceProfiles to delete
     */
    where?: FaceProfileWhereInput
    /**
     * Limit how many FaceProfiles to delete.
     */
    limit?: number
  }

  /**
   * FaceProfile.claimed
   */
  export type FaceProfile$claimedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * FaceProfile.photo_faces
   */
  export type FaceProfile$photo_facesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFace
     */
    select?: PhotoFaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFace
     */
    omit?: PhotoFaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFaceInclude<ExtArgs> | null
    where?: PhotoFaceWhereInput
    orderBy?: PhotoFaceOrderByWithRelationInput | PhotoFaceOrderByWithRelationInput[]
    cursor?: PhotoFaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoFaceScalarFieldEnum | PhotoFaceScalarFieldEnum[]
  }

  /**
   * FaceProfile without action
   */
  export type FaceProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaceProfile
     */
    select?: FaceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FaceProfile
     */
    omit?: FaceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaceProfileInclude<ExtArgs> | null
  }


  /**
   * Model PhotoFace
   */

  export type AggregatePhotoFace = {
    _count: PhotoFaceCountAggregateOutputType | null
    _avg: PhotoFaceAvgAggregateOutputType | null
    _sum: PhotoFaceSumAggregateOutputType | null
    _min: PhotoFaceMinAggregateOutputType | null
    _max: PhotoFaceMaxAggregateOutputType | null
  }

  export type PhotoFaceAvgAggregateOutputType = {
    bbox_x: number | null
    bbox_y: number | null
    bbox_w: number | null
    bbox_h: number | null
    confidence: number | null
  }

  export type PhotoFaceSumAggregateOutputType = {
    bbox_x: number | null
    bbox_y: number | null
    bbox_w: number | null
    bbox_h: number | null
    confidence: number | null
  }

  export type PhotoFaceMinAggregateOutputType = {
    id: string | null
    photo_id: string | null
    face_profile_id: string | null
    bbox_x: number | null
    bbox_y: number | null
    bbox_w: number | null
    bbox_h: number | null
    confidence: number | null
  }

  export type PhotoFaceMaxAggregateOutputType = {
    id: string | null
    photo_id: string | null
    face_profile_id: string | null
    bbox_x: number | null
    bbox_y: number | null
    bbox_w: number | null
    bbox_h: number | null
    confidence: number | null
  }

  export type PhotoFaceCountAggregateOutputType = {
    id: number
    photo_id: number
    face_profile_id: number
    bbox_x: number
    bbox_y: number
    bbox_w: number
    bbox_h: number
    confidence: number
    _all: number
  }


  export type PhotoFaceAvgAggregateInputType = {
    bbox_x?: true
    bbox_y?: true
    bbox_w?: true
    bbox_h?: true
    confidence?: true
  }

  export type PhotoFaceSumAggregateInputType = {
    bbox_x?: true
    bbox_y?: true
    bbox_w?: true
    bbox_h?: true
    confidence?: true
  }

  export type PhotoFaceMinAggregateInputType = {
    id?: true
    photo_id?: true
    face_profile_id?: true
    bbox_x?: true
    bbox_y?: true
    bbox_w?: true
    bbox_h?: true
    confidence?: true
  }

  export type PhotoFaceMaxAggregateInputType = {
    id?: true
    photo_id?: true
    face_profile_id?: true
    bbox_x?: true
    bbox_y?: true
    bbox_w?: true
    bbox_h?: true
    confidence?: true
  }

  export type PhotoFaceCountAggregateInputType = {
    id?: true
    photo_id?: true
    face_profile_id?: true
    bbox_x?: true
    bbox_y?: true
    bbox_w?: true
    bbox_h?: true
    confidence?: true
    _all?: true
  }

  export type PhotoFaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoFace to aggregate.
     */
    where?: PhotoFaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoFaces to fetch.
     */
    orderBy?: PhotoFaceOrderByWithRelationInput | PhotoFaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoFaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoFaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoFaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhotoFaces
    **/
    _count?: true | PhotoFaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotoFaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotoFaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoFaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoFaceMaxAggregateInputType
  }

  export type GetPhotoFaceAggregateType<T extends PhotoFaceAggregateArgs> = {
        [P in keyof T & keyof AggregatePhotoFace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhotoFace[P]>
      : GetScalarType<T[P], AggregatePhotoFace[P]>
  }




  export type PhotoFaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoFaceWhereInput
    orderBy?: PhotoFaceOrderByWithAggregationInput | PhotoFaceOrderByWithAggregationInput[]
    by: PhotoFaceScalarFieldEnum[] | PhotoFaceScalarFieldEnum
    having?: PhotoFaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoFaceCountAggregateInputType | true
    _avg?: PhotoFaceAvgAggregateInputType
    _sum?: PhotoFaceSumAggregateInputType
    _min?: PhotoFaceMinAggregateInputType
    _max?: PhotoFaceMaxAggregateInputType
  }

  export type PhotoFaceGroupByOutputType = {
    id: string
    photo_id: string
    face_profile_id: string
    bbox_x: number
    bbox_y: number
    bbox_w: number
    bbox_h: number
    confidence: number
    _count: PhotoFaceCountAggregateOutputType | null
    _avg: PhotoFaceAvgAggregateOutputType | null
    _sum: PhotoFaceSumAggregateOutputType | null
    _min: PhotoFaceMinAggregateOutputType | null
    _max: PhotoFaceMaxAggregateOutputType | null
  }

  type GetPhotoFaceGroupByPayload<T extends PhotoFaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoFaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoFaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoFaceGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoFaceGroupByOutputType[P]>
        }
      >
    >


  export type PhotoFaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photo_id?: boolean
    face_profile_id?: boolean
    bbox_x?: boolean
    bbox_y?: boolean
    bbox_w?: boolean
    bbox_h?: boolean
    confidence?: boolean
    photo?: boolean | PhotoDefaultArgs<ExtArgs>
    face_profile?: boolean | FaceProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoFace"]>

  export type PhotoFaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photo_id?: boolean
    face_profile_id?: boolean
    bbox_x?: boolean
    bbox_y?: boolean
    bbox_w?: boolean
    bbox_h?: boolean
    confidence?: boolean
    photo?: boolean | PhotoDefaultArgs<ExtArgs>
    face_profile?: boolean | FaceProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoFace"]>

  export type PhotoFaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photo_id?: boolean
    face_profile_id?: boolean
    bbox_x?: boolean
    bbox_y?: boolean
    bbox_w?: boolean
    bbox_h?: boolean
    confidence?: boolean
    photo?: boolean | PhotoDefaultArgs<ExtArgs>
    face_profile?: boolean | FaceProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoFace"]>

  export type PhotoFaceSelectScalar = {
    id?: boolean
    photo_id?: boolean
    face_profile_id?: boolean
    bbox_x?: boolean
    bbox_y?: boolean
    bbox_w?: boolean
    bbox_h?: boolean
    confidence?: boolean
  }

  export type PhotoFaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "photo_id" | "face_profile_id" | "bbox_x" | "bbox_y" | "bbox_w" | "bbox_h" | "confidence", ExtArgs["result"]["photoFace"]>
  export type PhotoFaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photo?: boolean | PhotoDefaultArgs<ExtArgs>
    face_profile?: boolean | FaceProfileDefaultArgs<ExtArgs>
  }
  export type PhotoFaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photo?: boolean | PhotoDefaultArgs<ExtArgs>
    face_profile?: boolean | FaceProfileDefaultArgs<ExtArgs>
  }
  export type PhotoFaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photo?: boolean | PhotoDefaultArgs<ExtArgs>
    face_profile?: boolean | FaceProfileDefaultArgs<ExtArgs>
  }

  export type $PhotoFacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhotoFace"
    objects: {
      photo: Prisma.$PhotoPayload<ExtArgs>
      face_profile: Prisma.$FaceProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      photo_id: string
      face_profile_id: string
      bbox_x: number
      bbox_y: number
      bbox_w: number
      bbox_h: number
      confidence: number
    }, ExtArgs["result"]["photoFace"]>
    composites: {}
  }

  type PhotoFaceGetPayload<S extends boolean | null | undefined | PhotoFaceDefaultArgs> = $Result.GetResult<Prisma.$PhotoFacePayload, S>

  type PhotoFaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoFaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoFaceCountAggregateInputType | true
    }

  export interface PhotoFaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhotoFace'], meta: { name: 'PhotoFace' } }
    /**
     * Find zero or one PhotoFace that matches the filter.
     * @param {PhotoFaceFindUniqueArgs} args - Arguments to find a PhotoFace
     * @example
     * // Get one PhotoFace
     * const photoFace = await prisma.photoFace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoFaceFindUniqueArgs>(args: SelectSubset<T, PhotoFaceFindUniqueArgs<ExtArgs>>): Prisma__PhotoFaceClient<$Result.GetResult<Prisma.$PhotoFacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhotoFace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoFaceFindUniqueOrThrowArgs} args - Arguments to find a PhotoFace
     * @example
     * // Get one PhotoFace
     * const photoFace = await prisma.photoFace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoFaceFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoFaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoFaceClient<$Result.GetResult<Prisma.$PhotoFacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhotoFace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFaceFindFirstArgs} args - Arguments to find a PhotoFace
     * @example
     * // Get one PhotoFace
     * const photoFace = await prisma.photoFace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoFaceFindFirstArgs>(args?: SelectSubset<T, PhotoFaceFindFirstArgs<ExtArgs>>): Prisma__PhotoFaceClient<$Result.GetResult<Prisma.$PhotoFacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhotoFace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFaceFindFirstOrThrowArgs} args - Arguments to find a PhotoFace
     * @example
     * // Get one PhotoFace
     * const photoFace = await prisma.photoFace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoFaceFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoFaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoFaceClient<$Result.GetResult<Prisma.$PhotoFacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhotoFaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhotoFaces
     * const photoFaces = await prisma.photoFace.findMany()
     * 
     * // Get first 10 PhotoFaces
     * const photoFaces = await prisma.photoFace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoFaceWithIdOnly = await prisma.photoFace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoFaceFindManyArgs>(args?: SelectSubset<T, PhotoFaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoFacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhotoFace.
     * @param {PhotoFaceCreateArgs} args - Arguments to create a PhotoFace.
     * @example
     * // Create one PhotoFace
     * const PhotoFace = await prisma.photoFace.create({
     *   data: {
     *     // ... data to create a PhotoFace
     *   }
     * })
     * 
     */
    create<T extends PhotoFaceCreateArgs>(args: SelectSubset<T, PhotoFaceCreateArgs<ExtArgs>>): Prisma__PhotoFaceClient<$Result.GetResult<Prisma.$PhotoFacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhotoFaces.
     * @param {PhotoFaceCreateManyArgs} args - Arguments to create many PhotoFaces.
     * @example
     * // Create many PhotoFaces
     * const photoFace = await prisma.photoFace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoFaceCreateManyArgs>(args?: SelectSubset<T, PhotoFaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhotoFaces and returns the data saved in the database.
     * @param {PhotoFaceCreateManyAndReturnArgs} args - Arguments to create many PhotoFaces.
     * @example
     * // Create many PhotoFaces
     * const photoFace = await prisma.photoFace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhotoFaces and only return the `id`
     * const photoFaceWithIdOnly = await prisma.photoFace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhotoFaceCreateManyAndReturnArgs>(args?: SelectSubset<T, PhotoFaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoFacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PhotoFace.
     * @param {PhotoFaceDeleteArgs} args - Arguments to delete one PhotoFace.
     * @example
     * // Delete one PhotoFace
     * const PhotoFace = await prisma.photoFace.delete({
     *   where: {
     *     // ... filter to delete one PhotoFace
     *   }
     * })
     * 
     */
    delete<T extends PhotoFaceDeleteArgs>(args: SelectSubset<T, PhotoFaceDeleteArgs<ExtArgs>>): Prisma__PhotoFaceClient<$Result.GetResult<Prisma.$PhotoFacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhotoFace.
     * @param {PhotoFaceUpdateArgs} args - Arguments to update one PhotoFace.
     * @example
     * // Update one PhotoFace
     * const photoFace = await prisma.photoFace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoFaceUpdateArgs>(args: SelectSubset<T, PhotoFaceUpdateArgs<ExtArgs>>): Prisma__PhotoFaceClient<$Result.GetResult<Prisma.$PhotoFacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhotoFaces.
     * @param {PhotoFaceDeleteManyArgs} args - Arguments to filter PhotoFaces to delete.
     * @example
     * // Delete a few PhotoFaces
     * const { count } = await prisma.photoFace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoFaceDeleteManyArgs>(args?: SelectSubset<T, PhotoFaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotoFaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhotoFaces
     * const photoFace = await prisma.photoFace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoFaceUpdateManyArgs>(args: SelectSubset<T, PhotoFaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotoFaces and returns the data updated in the database.
     * @param {PhotoFaceUpdateManyAndReturnArgs} args - Arguments to update many PhotoFaces.
     * @example
     * // Update many PhotoFaces
     * const photoFace = await prisma.photoFace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PhotoFaces and only return the `id`
     * const photoFaceWithIdOnly = await prisma.photoFace.updateManyAndReturn({
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
    updateManyAndReturn<T extends PhotoFaceUpdateManyAndReturnArgs>(args: SelectSubset<T, PhotoFaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoFacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PhotoFace.
     * @param {PhotoFaceUpsertArgs} args - Arguments to update or create a PhotoFace.
     * @example
     * // Update or create a PhotoFace
     * const photoFace = await prisma.photoFace.upsert({
     *   create: {
     *     // ... data to create a PhotoFace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhotoFace we want to update
     *   }
     * })
     */
    upsert<T extends PhotoFaceUpsertArgs>(args: SelectSubset<T, PhotoFaceUpsertArgs<ExtArgs>>): Prisma__PhotoFaceClient<$Result.GetResult<Prisma.$PhotoFacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhotoFaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFaceCountArgs} args - Arguments to filter PhotoFaces to count.
     * @example
     * // Count the number of PhotoFaces
     * const count = await prisma.photoFace.count({
     *   where: {
     *     // ... the filter for the PhotoFaces we want to count
     *   }
     * })
    **/
    count<T extends PhotoFaceCountArgs>(
      args?: Subset<T, PhotoFaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoFaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhotoFace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhotoFaceAggregateArgs>(args: Subset<T, PhotoFaceAggregateArgs>): Prisma.PrismaPromise<GetPhotoFaceAggregateType<T>>

    /**
     * Group by PhotoFace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFaceGroupByArgs} args - Group by arguments.
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
      T extends PhotoFaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoFaceGroupByArgs['orderBy'] }
        : { orderBy?: PhotoFaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhotoFaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoFaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhotoFace model
   */
  readonly fields: PhotoFaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhotoFace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoFaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    photo<T extends PhotoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhotoDefaultArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    face_profile<T extends FaceProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FaceProfileDefaultArgs<ExtArgs>>): Prisma__FaceProfileClient<$Result.GetResult<Prisma.$FaceProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PhotoFace model
   */
  interface PhotoFaceFieldRefs {
    readonly id: FieldRef<"PhotoFace", 'String'>
    readonly photo_id: FieldRef<"PhotoFace", 'String'>
    readonly face_profile_id: FieldRef<"PhotoFace", 'String'>
    readonly bbox_x: FieldRef<"PhotoFace", 'Int'>
    readonly bbox_y: FieldRef<"PhotoFace", 'Int'>
    readonly bbox_w: FieldRef<"PhotoFace", 'Int'>
    readonly bbox_h: FieldRef<"PhotoFace", 'Int'>
    readonly confidence: FieldRef<"PhotoFace", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * PhotoFace findUnique
   */
  export type PhotoFaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFace
     */
    select?: PhotoFaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFace
     */
    omit?: PhotoFaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFaceInclude<ExtArgs> | null
    /**
     * Filter, which PhotoFace to fetch.
     */
    where: PhotoFaceWhereUniqueInput
  }

  /**
   * PhotoFace findUniqueOrThrow
   */
  export type PhotoFaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFace
     */
    select?: PhotoFaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFace
     */
    omit?: PhotoFaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFaceInclude<ExtArgs> | null
    /**
     * Filter, which PhotoFace to fetch.
     */
    where: PhotoFaceWhereUniqueInput
  }

  /**
   * PhotoFace findFirst
   */
  export type PhotoFaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFace
     */
    select?: PhotoFaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFace
     */
    omit?: PhotoFaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFaceInclude<ExtArgs> | null
    /**
     * Filter, which PhotoFace to fetch.
     */
    where?: PhotoFaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoFaces to fetch.
     */
    orderBy?: PhotoFaceOrderByWithRelationInput | PhotoFaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoFaces.
     */
    cursor?: PhotoFaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoFaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoFaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoFaces.
     */
    distinct?: PhotoFaceScalarFieldEnum | PhotoFaceScalarFieldEnum[]
  }

  /**
   * PhotoFace findFirstOrThrow
   */
  export type PhotoFaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFace
     */
    select?: PhotoFaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFace
     */
    omit?: PhotoFaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFaceInclude<ExtArgs> | null
    /**
     * Filter, which PhotoFace to fetch.
     */
    where?: PhotoFaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoFaces to fetch.
     */
    orderBy?: PhotoFaceOrderByWithRelationInput | PhotoFaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoFaces.
     */
    cursor?: PhotoFaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoFaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoFaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoFaces.
     */
    distinct?: PhotoFaceScalarFieldEnum | PhotoFaceScalarFieldEnum[]
  }

  /**
   * PhotoFace findMany
   */
  export type PhotoFaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFace
     */
    select?: PhotoFaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFace
     */
    omit?: PhotoFaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFaceInclude<ExtArgs> | null
    /**
     * Filter, which PhotoFaces to fetch.
     */
    where?: PhotoFaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoFaces to fetch.
     */
    orderBy?: PhotoFaceOrderByWithRelationInput | PhotoFaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhotoFaces.
     */
    cursor?: PhotoFaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoFaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoFaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoFaces.
     */
    distinct?: PhotoFaceScalarFieldEnum | PhotoFaceScalarFieldEnum[]
  }

  /**
   * PhotoFace create
   */
  export type PhotoFaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFace
     */
    select?: PhotoFaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFace
     */
    omit?: PhotoFaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFaceInclude<ExtArgs> | null
    /**
     * The data needed to create a PhotoFace.
     */
    data: XOR<PhotoFaceCreateInput, PhotoFaceUncheckedCreateInput>
  }

  /**
   * PhotoFace createMany
   */
  export type PhotoFaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhotoFaces.
     */
    data: PhotoFaceCreateManyInput | PhotoFaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhotoFace createManyAndReturn
   */
  export type PhotoFaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFace
     */
    select?: PhotoFaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFace
     */
    omit?: PhotoFaceOmit<ExtArgs> | null
    /**
     * The data used to create many PhotoFaces.
     */
    data: PhotoFaceCreateManyInput | PhotoFaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhotoFace update
   */
  export type PhotoFaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFace
     */
    select?: PhotoFaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFace
     */
    omit?: PhotoFaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFaceInclude<ExtArgs> | null
    /**
     * The data needed to update a PhotoFace.
     */
    data: XOR<PhotoFaceUpdateInput, PhotoFaceUncheckedUpdateInput>
    /**
     * Choose, which PhotoFace to update.
     */
    where: PhotoFaceWhereUniqueInput
  }

  /**
   * PhotoFace updateMany
   */
  export type PhotoFaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhotoFaces.
     */
    data: XOR<PhotoFaceUpdateManyMutationInput, PhotoFaceUncheckedUpdateManyInput>
    /**
     * Filter which PhotoFaces to update
     */
    where?: PhotoFaceWhereInput
    /**
     * Limit how many PhotoFaces to update.
     */
    limit?: number
  }

  /**
   * PhotoFace updateManyAndReturn
   */
  export type PhotoFaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFace
     */
    select?: PhotoFaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFace
     */
    omit?: PhotoFaceOmit<ExtArgs> | null
    /**
     * The data used to update PhotoFaces.
     */
    data: XOR<PhotoFaceUpdateManyMutationInput, PhotoFaceUncheckedUpdateManyInput>
    /**
     * Filter which PhotoFaces to update
     */
    where?: PhotoFaceWhereInput
    /**
     * Limit how many PhotoFaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhotoFace upsert
   */
  export type PhotoFaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFace
     */
    select?: PhotoFaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFace
     */
    omit?: PhotoFaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFaceInclude<ExtArgs> | null
    /**
     * The filter to search for the PhotoFace to update in case it exists.
     */
    where: PhotoFaceWhereUniqueInput
    /**
     * In case the PhotoFace found by the `where` argument doesn't exist, create a new PhotoFace with this data.
     */
    create: XOR<PhotoFaceCreateInput, PhotoFaceUncheckedCreateInput>
    /**
     * In case the PhotoFace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoFaceUpdateInput, PhotoFaceUncheckedUpdateInput>
  }

  /**
   * PhotoFace delete
   */
  export type PhotoFaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFace
     */
    select?: PhotoFaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFace
     */
    omit?: PhotoFaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFaceInclude<ExtArgs> | null
    /**
     * Filter which PhotoFace to delete.
     */
    where: PhotoFaceWhereUniqueInput
  }

  /**
   * PhotoFace deleteMany
   */
  export type PhotoFaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoFaces to delete
     */
    where?: PhotoFaceWhereInput
    /**
     * Limit how many PhotoFaces to delete.
     */
    limit?: number
  }

  /**
   * PhotoFace without action
   */
  export type PhotoFaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoFace
     */
    select?: PhotoFaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoFace
     */
    omit?: PhotoFaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoFaceInclude<ExtArgs> | null
  }


  /**
   * Model Blacklist
   */

  export type AggregateBlacklist = {
    _count: BlacklistCountAggregateOutputType | null
    _min: BlacklistMinAggregateOutputType | null
    _max: BlacklistMaxAggregateOutputType | null
  }

  export type BlacklistMinAggregateOutputType = {
    id: string | null
    token: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type BlacklistMaxAggregateOutputType = {
    id: string | null
    token: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type BlacklistCountAggregateOutputType = {
    id: number
    token: number
    expires_at: number
    created_at: number
    _all: number
  }


  export type BlacklistMinAggregateInputType = {
    id?: true
    token?: true
    expires_at?: true
    created_at?: true
  }

  export type BlacklistMaxAggregateInputType = {
    id?: true
    token?: true
    expires_at?: true
    created_at?: true
  }

  export type BlacklistCountAggregateInputType = {
    id?: true
    token?: true
    expires_at?: true
    created_at?: true
    _all?: true
  }

  export type BlacklistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blacklist to aggregate.
     */
    where?: BlacklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blacklists to fetch.
     */
    orderBy?: BlacklistOrderByWithRelationInput | BlacklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlacklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blacklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blacklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blacklists
    **/
    _count?: true | BlacklistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlacklistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlacklistMaxAggregateInputType
  }

  export type GetBlacklistAggregateType<T extends BlacklistAggregateArgs> = {
        [P in keyof T & keyof AggregateBlacklist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlacklist[P]>
      : GetScalarType<T[P], AggregateBlacklist[P]>
  }




  export type BlacklistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlacklistWhereInput
    orderBy?: BlacklistOrderByWithAggregationInput | BlacklistOrderByWithAggregationInput[]
    by: BlacklistScalarFieldEnum[] | BlacklistScalarFieldEnum
    having?: BlacklistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlacklistCountAggregateInputType | true
    _min?: BlacklistMinAggregateInputType
    _max?: BlacklistMaxAggregateInputType
  }

  export type BlacklistGroupByOutputType = {
    id: string
    token: string
    expires_at: Date
    created_at: Date
    _count: BlacklistCountAggregateOutputType | null
    _min: BlacklistMinAggregateOutputType | null
    _max: BlacklistMaxAggregateOutputType | null
  }

  type GetBlacklistGroupByPayload<T extends BlacklistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlacklistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlacklistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlacklistGroupByOutputType[P]>
            : GetScalarType<T[P], BlacklistGroupByOutputType[P]>
        }
      >
    >


  export type BlacklistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expires_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["blacklist"]>

  export type BlacklistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expires_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["blacklist"]>

  export type BlacklistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expires_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["blacklist"]>

  export type BlacklistSelectScalar = {
    id?: boolean
    token?: boolean
    expires_at?: boolean
    created_at?: boolean
  }

  export type BlacklistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "expires_at" | "created_at", ExtArgs["result"]["blacklist"]>

  export type $BlacklistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blacklist"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      expires_at: Date
      created_at: Date
    }, ExtArgs["result"]["blacklist"]>
    composites: {}
  }

  type BlacklistGetPayload<S extends boolean | null | undefined | BlacklistDefaultArgs> = $Result.GetResult<Prisma.$BlacklistPayload, S>

  type BlacklistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlacklistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlacklistCountAggregateInputType | true
    }

  export interface BlacklistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blacklist'], meta: { name: 'Blacklist' } }
    /**
     * Find zero or one Blacklist that matches the filter.
     * @param {BlacklistFindUniqueArgs} args - Arguments to find a Blacklist
     * @example
     * // Get one Blacklist
     * const blacklist = await prisma.blacklist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlacklistFindUniqueArgs>(args: SelectSubset<T, BlacklistFindUniqueArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blacklist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlacklistFindUniqueOrThrowArgs} args - Arguments to find a Blacklist
     * @example
     * // Get one Blacklist
     * const blacklist = await prisma.blacklist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlacklistFindUniqueOrThrowArgs>(args: SelectSubset<T, BlacklistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blacklist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistFindFirstArgs} args - Arguments to find a Blacklist
     * @example
     * // Get one Blacklist
     * const blacklist = await prisma.blacklist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlacklistFindFirstArgs>(args?: SelectSubset<T, BlacklistFindFirstArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blacklist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistFindFirstOrThrowArgs} args - Arguments to find a Blacklist
     * @example
     * // Get one Blacklist
     * const blacklist = await prisma.blacklist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlacklistFindFirstOrThrowArgs>(args?: SelectSubset<T, BlacklistFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blacklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blacklists
     * const blacklists = await prisma.blacklist.findMany()
     * 
     * // Get first 10 Blacklists
     * const blacklists = await prisma.blacklist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blacklistWithIdOnly = await prisma.blacklist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlacklistFindManyArgs>(args?: SelectSubset<T, BlacklistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blacklist.
     * @param {BlacklistCreateArgs} args - Arguments to create a Blacklist.
     * @example
     * // Create one Blacklist
     * const Blacklist = await prisma.blacklist.create({
     *   data: {
     *     // ... data to create a Blacklist
     *   }
     * })
     * 
     */
    create<T extends BlacklistCreateArgs>(args: SelectSubset<T, BlacklistCreateArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blacklists.
     * @param {BlacklistCreateManyArgs} args - Arguments to create many Blacklists.
     * @example
     * // Create many Blacklists
     * const blacklist = await prisma.blacklist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlacklistCreateManyArgs>(args?: SelectSubset<T, BlacklistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blacklists and returns the data saved in the database.
     * @param {BlacklistCreateManyAndReturnArgs} args - Arguments to create many Blacklists.
     * @example
     * // Create many Blacklists
     * const blacklist = await prisma.blacklist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blacklists and only return the `id`
     * const blacklistWithIdOnly = await prisma.blacklist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlacklistCreateManyAndReturnArgs>(args?: SelectSubset<T, BlacklistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blacklist.
     * @param {BlacklistDeleteArgs} args - Arguments to delete one Blacklist.
     * @example
     * // Delete one Blacklist
     * const Blacklist = await prisma.blacklist.delete({
     *   where: {
     *     // ... filter to delete one Blacklist
     *   }
     * })
     * 
     */
    delete<T extends BlacklistDeleteArgs>(args: SelectSubset<T, BlacklistDeleteArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blacklist.
     * @param {BlacklistUpdateArgs} args - Arguments to update one Blacklist.
     * @example
     * // Update one Blacklist
     * const blacklist = await prisma.blacklist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlacklistUpdateArgs>(args: SelectSubset<T, BlacklistUpdateArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blacklists.
     * @param {BlacklistDeleteManyArgs} args - Arguments to filter Blacklists to delete.
     * @example
     * // Delete a few Blacklists
     * const { count } = await prisma.blacklist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlacklistDeleteManyArgs>(args?: SelectSubset<T, BlacklistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blacklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blacklists
     * const blacklist = await prisma.blacklist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlacklistUpdateManyArgs>(args: SelectSubset<T, BlacklistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blacklists and returns the data updated in the database.
     * @param {BlacklistUpdateManyAndReturnArgs} args - Arguments to update many Blacklists.
     * @example
     * // Update many Blacklists
     * const blacklist = await prisma.blacklist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blacklists and only return the `id`
     * const blacklistWithIdOnly = await prisma.blacklist.updateManyAndReturn({
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
    updateManyAndReturn<T extends BlacklistUpdateManyAndReturnArgs>(args: SelectSubset<T, BlacklistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blacklist.
     * @param {BlacklistUpsertArgs} args - Arguments to update or create a Blacklist.
     * @example
     * // Update or create a Blacklist
     * const blacklist = await prisma.blacklist.upsert({
     *   create: {
     *     // ... data to create a Blacklist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blacklist we want to update
     *   }
     * })
     */
    upsert<T extends BlacklistUpsertArgs>(args: SelectSubset<T, BlacklistUpsertArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blacklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistCountArgs} args - Arguments to filter Blacklists to count.
     * @example
     * // Count the number of Blacklists
     * const count = await prisma.blacklist.count({
     *   where: {
     *     // ... the filter for the Blacklists we want to count
     *   }
     * })
    **/
    count<T extends BlacklistCountArgs>(
      args?: Subset<T, BlacklistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlacklistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blacklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlacklistAggregateArgs>(args: Subset<T, BlacklistAggregateArgs>): Prisma.PrismaPromise<GetBlacklistAggregateType<T>>

    /**
     * Group by Blacklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistGroupByArgs} args - Group by arguments.
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
      T extends BlacklistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlacklistGroupByArgs['orderBy'] }
        : { orderBy?: BlacklistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlacklistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlacklistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blacklist model
   */
  readonly fields: BlacklistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blacklist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlacklistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Blacklist model
   */
  interface BlacklistFieldRefs {
    readonly id: FieldRef<"Blacklist", 'String'>
    readonly token: FieldRef<"Blacklist", 'String'>
    readonly expires_at: FieldRef<"Blacklist", 'DateTime'>
    readonly created_at: FieldRef<"Blacklist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blacklist findUnique
   */
  export type BlacklistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Filter, which Blacklist to fetch.
     */
    where: BlacklistWhereUniqueInput
  }

  /**
   * Blacklist findUniqueOrThrow
   */
  export type BlacklistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Filter, which Blacklist to fetch.
     */
    where: BlacklistWhereUniqueInput
  }

  /**
   * Blacklist findFirst
   */
  export type BlacklistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Filter, which Blacklist to fetch.
     */
    where?: BlacklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blacklists to fetch.
     */
    orderBy?: BlacklistOrderByWithRelationInput | BlacklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blacklists.
     */
    cursor?: BlacklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blacklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blacklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blacklists.
     */
    distinct?: BlacklistScalarFieldEnum | BlacklistScalarFieldEnum[]
  }

  /**
   * Blacklist findFirstOrThrow
   */
  export type BlacklistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Filter, which Blacklist to fetch.
     */
    where?: BlacklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blacklists to fetch.
     */
    orderBy?: BlacklistOrderByWithRelationInput | BlacklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blacklists.
     */
    cursor?: BlacklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blacklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blacklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blacklists.
     */
    distinct?: BlacklistScalarFieldEnum | BlacklistScalarFieldEnum[]
  }

  /**
   * Blacklist findMany
   */
  export type BlacklistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Filter, which Blacklists to fetch.
     */
    where?: BlacklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blacklists to fetch.
     */
    orderBy?: BlacklistOrderByWithRelationInput | BlacklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blacklists.
     */
    cursor?: BlacklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blacklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blacklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blacklists.
     */
    distinct?: BlacklistScalarFieldEnum | BlacklistScalarFieldEnum[]
  }

  /**
   * Blacklist create
   */
  export type BlacklistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * The data needed to create a Blacklist.
     */
    data: XOR<BlacklistCreateInput, BlacklistUncheckedCreateInput>
  }

  /**
   * Blacklist createMany
   */
  export type BlacklistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blacklists.
     */
    data: BlacklistCreateManyInput | BlacklistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blacklist createManyAndReturn
   */
  export type BlacklistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * The data used to create many Blacklists.
     */
    data: BlacklistCreateManyInput | BlacklistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blacklist update
   */
  export type BlacklistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * The data needed to update a Blacklist.
     */
    data: XOR<BlacklistUpdateInput, BlacklistUncheckedUpdateInput>
    /**
     * Choose, which Blacklist to update.
     */
    where: BlacklistWhereUniqueInput
  }

  /**
   * Blacklist updateMany
   */
  export type BlacklistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blacklists.
     */
    data: XOR<BlacklistUpdateManyMutationInput, BlacklistUncheckedUpdateManyInput>
    /**
     * Filter which Blacklists to update
     */
    where?: BlacklistWhereInput
    /**
     * Limit how many Blacklists to update.
     */
    limit?: number
  }

  /**
   * Blacklist updateManyAndReturn
   */
  export type BlacklistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * The data used to update Blacklists.
     */
    data: XOR<BlacklistUpdateManyMutationInput, BlacklistUncheckedUpdateManyInput>
    /**
     * Filter which Blacklists to update
     */
    where?: BlacklistWhereInput
    /**
     * Limit how many Blacklists to update.
     */
    limit?: number
  }

  /**
   * Blacklist upsert
   */
  export type BlacklistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * The filter to search for the Blacklist to update in case it exists.
     */
    where: BlacklistWhereUniqueInput
    /**
     * In case the Blacklist found by the `where` argument doesn't exist, create a new Blacklist with this data.
     */
    create: XOR<BlacklistCreateInput, BlacklistUncheckedCreateInput>
    /**
     * In case the Blacklist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlacklistUpdateInput, BlacklistUncheckedUpdateInput>
  }

  /**
   * Blacklist delete
   */
  export type BlacklistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Filter which Blacklist to delete.
     */
    where: BlacklistWhereUniqueInput
  }

  /**
   * Blacklist deleteMany
   */
  export type BlacklistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blacklists to delete
     */
    where?: BlacklistWhereInput
    /**
     * Limit how many Blacklists to delete.
     */
    limit?: number
  }

  /**
   * Blacklist without action
   */
  export type BlacklistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    user_id: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    user_id: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    user_id: number
    expires_at: number
    created_at: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    user_id?: true
    expires_at?: true
    created_at?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    user_id?: true
    expires_at?: true
    created_at?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    user_id?: true
    expires_at?: true
    created_at?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    token: string
    user_id: string
    expires_at: Date
    created_at: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    user_id?: boolean
    expires_at?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    user_id?: boolean
    expires_at?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    user_id?: boolean
    expires_at?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    user_id?: boolean
    expires_at?: boolean
    created_at?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "user_id" | "expires_at" | "created_at", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      user_id: string
      expires_at: Date
      created_at: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly user_id: FieldRef<"RefreshToken", 'String'>
    readonly expires_at: FieldRef<"RefreshToken", 'DateTime'>
    readonly created_at: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
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
    password_hash: 'password_hash',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    location: 'location',
    date: 'date',
    invite_code: 'invite_code',
    is_active: 'is_active',
    attendee_upload_limit: 'attendee_upload_limit',
    created_at: 'created_at'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventAccessScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    user_id: 'user_id',
    role: 'role',
    upload_count: 'upload_count',
    joined_at: 'joined_at'
  };

  export type EventAccessScalarFieldEnum = (typeof EventAccessScalarFieldEnum)[keyof typeof EventAccessScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    user_id: 'user_id',
    storage_url: 'storage_url',
    uploaded_at: 'uploaded_at',
    processed: 'processed',
    is_visible: 'is_visible'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const FaceProfileScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    claimed_by: 'claimed_by',
    is_calimed: 'is_calimed'
  };

  export type FaceProfileScalarFieldEnum = (typeof FaceProfileScalarFieldEnum)[keyof typeof FaceProfileScalarFieldEnum]


  export const PhotoFaceScalarFieldEnum: {
    id: 'id',
    photo_id: 'photo_id',
    face_profile_id: 'face_profile_id',
    bbox_x: 'bbox_x',
    bbox_y: 'bbox_y',
    bbox_w: 'bbox_w',
    bbox_h: 'bbox_h',
    confidence: 'confidence'
  };

  export type PhotoFaceScalarFieldEnum = (typeof PhotoFaceScalarFieldEnum)[keyof typeof PhotoFaceScalarFieldEnum]


  export const BlacklistScalarFieldEnum: {
    id: 'id',
    token: 'token',
    expires_at: 'expires_at',
    created_at: 'created_at'
  };

  export type BlacklistScalarFieldEnum = (typeof BlacklistScalarFieldEnum)[keyof typeof BlacklistScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    user_id: 'user_id',
    expires_at: 'expires_at',
    created_at: 'created_at'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    events?: EventListRelationFilter
    event_access?: EventAccessListRelationFilter
    photos?: PhotoListRelationFilter
    claimed_profiles?: FaceProfileListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    events?: EventOrderByRelationAggregateInput
    event_access?: EventAccessOrderByRelationAggregateInput
    photos?: PhotoOrderByRelationAggregateInput
    claimed_profiles?: FaceProfileOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    events?: EventListRelationFilter
    event_access?: EventAccessListRelationFilter
    photos?: PhotoListRelationFilter
    claimed_profiles?: FaceProfileListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    user_id?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    invite_code?: StringFilter<"Event"> | string
    is_active?: BoolFilter<"Event"> | boolean
    attendee_upload_limit?: IntFilter<"Event"> | number
    created_at?: DateTimeFilter<"Event"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event_access?: EventAccessListRelationFilter
    photos?: PhotoListRelationFilter
    face_profiles?: FaceProfileListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    date?: SortOrder
    invite_code?: SortOrder
    is_active?: SortOrder
    attendee_upload_limit?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    event_access?: EventAccessOrderByRelationAggregateInput
    photos?: PhotoOrderByRelationAggregateInput
    face_profiles?: FaceProfileOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    invite_code?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    user_id?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    is_active?: BoolFilter<"Event"> | boolean
    attendee_upload_limit?: IntFilter<"Event"> | number
    created_at?: DateTimeFilter<"Event"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event_access?: EventAccessListRelationFilter
    photos?: PhotoListRelationFilter
    face_profiles?: FaceProfileListRelationFilter
  }, "id" | "invite_code">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    date?: SortOrder
    invite_code?: SortOrder
    is_active?: SortOrder
    attendee_upload_limit?: SortOrder
    created_at?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    user_id?: StringWithAggregatesFilter<"Event"> | string
    name?: StringWithAggregatesFilter<"Event"> | string
    location?: StringWithAggregatesFilter<"Event"> | string
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    invite_code?: StringWithAggregatesFilter<"Event"> | string
    is_active?: BoolWithAggregatesFilter<"Event"> | boolean
    attendee_upload_limit?: IntWithAggregatesFilter<"Event"> | number
    created_at?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type EventAccessWhereInput = {
    AND?: EventAccessWhereInput | EventAccessWhereInput[]
    OR?: EventAccessWhereInput[]
    NOT?: EventAccessWhereInput | EventAccessWhereInput[]
    id?: StringFilter<"EventAccess"> | string
    event_id?: StringFilter<"EventAccess"> | string
    user_id?: StringFilter<"EventAccess"> | string
    role?: EnumRoleFilter<"EventAccess"> | $Enums.Role
    upload_count?: IntFilter<"EventAccess"> | number
    joined_at?: DateTimeFilter<"EventAccess"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EventAccessOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    upload_count?: SortOrder
    joined_at?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type EventAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    event_id_user_id?: EventAccessEvent_idUser_idCompoundUniqueInput
    AND?: EventAccessWhereInput | EventAccessWhereInput[]
    OR?: EventAccessWhereInput[]
    NOT?: EventAccessWhereInput | EventAccessWhereInput[]
    event_id?: StringFilter<"EventAccess"> | string
    user_id?: StringFilter<"EventAccess"> | string
    role?: EnumRoleFilter<"EventAccess"> | $Enums.Role
    upload_count?: IntFilter<"EventAccess"> | number
    joined_at?: DateTimeFilter<"EventAccess"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "event_id_user_id">

  export type EventAccessOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    upload_count?: SortOrder
    joined_at?: SortOrder
    _count?: EventAccessCountOrderByAggregateInput
    _avg?: EventAccessAvgOrderByAggregateInput
    _max?: EventAccessMaxOrderByAggregateInput
    _min?: EventAccessMinOrderByAggregateInput
    _sum?: EventAccessSumOrderByAggregateInput
  }

  export type EventAccessScalarWhereWithAggregatesInput = {
    AND?: EventAccessScalarWhereWithAggregatesInput | EventAccessScalarWhereWithAggregatesInput[]
    OR?: EventAccessScalarWhereWithAggregatesInput[]
    NOT?: EventAccessScalarWhereWithAggregatesInput | EventAccessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventAccess"> | string
    event_id?: StringWithAggregatesFilter<"EventAccess"> | string
    user_id?: StringWithAggregatesFilter<"EventAccess"> | string
    role?: EnumRoleWithAggregatesFilter<"EventAccess"> | $Enums.Role
    upload_count?: IntWithAggregatesFilter<"EventAccess"> | number
    joined_at?: DateTimeWithAggregatesFilter<"EventAccess"> | Date | string
  }

  export type PhotoWhereInput = {
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    id?: StringFilter<"Photo"> | string
    event_id?: StringFilter<"Photo"> | string
    user_id?: StringFilter<"Photo"> | string
    storage_url?: StringFilter<"Photo"> | string
    uploaded_at?: DateTimeFilter<"Photo"> | Date | string
    processed?: BoolFilter<"Photo"> | boolean
    is_visible?: BoolFilter<"Photo"> | boolean
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    photo_faces?: PhotoFaceListRelationFilter
  }

  export type PhotoOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    storage_url?: SortOrder
    uploaded_at?: SortOrder
    processed?: SortOrder
    is_visible?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    photo_faces?: PhotoFaceOrderByRelationAggregateInput
  }

  export type PhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    storage_url?: string
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    event_id?: StringFilter<"Photo"> | string
    user_id?: StringFilter<"Photo"> | string
    uploaded_at?: DateTimeFilter<"Photo"> | Date | string
    processed?: BoolFilter<"Photo"> | boolean
    is_visible?: BoolFilter<"Photo"> | boolean
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    photo_faces?: PhotoFaceListRelationFilter
  }, "id" | "storage_url">

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    storage_url?: SortOrder
    uploaded_at?: SortOrder
    processed?: SortOrder
    is_visible?: SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    OR?: PhotoScalarWhereWithAggregatesInput[]
    NOT?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Photo"> | string
    event_id?: StringWithAggregatesFilter<"Photo"> | string
    user_id?: StringWithAggregatesFilter<"Photo"> | string
    storage_url?: StringWithAggregatesFilter<"Photo"> | string
    uploaded_at?: DateTimeWithAggregatesFilter<"Photo"> | Date | string
    processed?: BoolWithAggregatesFilter<"Photo"> | boolean
    is_visible?: BoolWithAggregatesFilter<"Photo"> | boolean
  }

  export type FaceProfileWhereInput = {
    AND?: FaceProfileWhereInput | FaceProfileWhereInput[]
    OR?: FaceProfileWhereInput[]
    NOT?: FaceProfileWhereInput | FaceProfileWhereInput[]
    id?: StringFilter<"FaceProfile"> | string
    event_id?: StringFilter<"FaceProfile"> | string
    claimed_by?: StringNullableFilter<"FaceProfile"> | string | null
    is_calimed?: BoolFilter<"FaceProfile"> | boolean
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    claimed?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    photo_faces?: PhotoFaceListRelationFilter
  }

  export type FaceProfileOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrder
    claimed_by?: SortOrderInput | SortOrder
    is_calimed?: SortOrder
    event?: EventOrderByWithRelationInput
    claimed?: UserOrderByWithRelationInput
    photo_faces?: PhotoFaceOrderByRelationAggregateInput
  }

  export type FaceProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FaceProfileWhereInput | FaceProfileWhereInput[]
    OR?: FaceProfileWhereInput[]
    NOT?: FaceProfileWhereInput | FaceProfileWhereInput[]
    event_id?: StringFilter<"FaceProfile"> | string
    claimed_by?: StringNullableFilter<"FaceProfile"> | string | null
    is_calimed?: BoolFilter<"FaceProfile"> | boolean
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    claimed?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    photo_faces?: PhotoFaceListRelationFilter
  }, "id">

  export type FaceProfileOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrder
    claimed_by?: SortOrderInput | SortOrder
    is_calimed?: SortOrder
    _count?: FaceProfileCountOrderByAggregateInput
    _max?: FaceProfileMaxOrderByAggregateInput
    _min?: FaceProfileMinOrderByAggregateInput
  }

  export type FaceProfileScalarWhereWithAggregatesInput = {
    AND?: FaceProfileScalarWhereWithAggregatesInput | FaceProfileScalarWhereWithAggregatesInput[]
    OR?: FaceProfileScalarWhereWithAggregatesInput[]
    NOT?: FaceProfileScalarWhereWithAggregatesInput | FaceProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FaceProfile"> | string
    event_id?: StringWithAggregatesFilter<"FaceProfile"> | string
    claimed_by?: StringNullableWithAggregatesFilter<"FaceProfile"> | string | null
    is_calimed?: BoolWithAggregatesFilter<"FaceProfile"> | boolean
  }

  export type PhotoFaceWhereInput = {
    AND?: PhotoFaceWhereInput | PhotoFaceWhereInput[]
    OR?: PhotoFaceWhereInput[]
    NOT?: PhotoFaceWhereInput | PhotoFaceWhereInput[]
    id?: StringFilter<"PhotoFace"> | string
    photo_id?: StringFilter<"PhotoFace"> | string
    face_profile_id?: StringFilter<"PhotoFace"> | string
    bbox_x?: IntFilter<"PhotoFace"> | number
    bbox_y?: IntFilter<"PhotoFace"> | number
    bbox_w?: IntFilter<"PhotoFace"> | number
    bbox_h?: IntFilter<"PhotoFace"> | number
    confidence?: FloatFilter<"PhotoFace"> | number
    photo?: XOR<PhotoScalarRelationFilter, PhotoWhereInput>
    face_profile?: XOR<FaceProfileScalarRelationFilter, FaceProfileWhereInput>
  }

  export type PhotoFaceOrderByWithRelationInput = {
    id?: SortOrder
    photo_id?: SortOrder
    face_profile_id?: SortOrder
    bbox_x?: SortOrder
    bbox_y?: SortOrder
    bbox_w?: SortOrder
    bbox_h?: SortOrder
    confidence?: SortOrder
    photo?: PhotoOrderByWithRelationInput
    face_profile?: FaceProfileOrderByWithRelationInput
  }

  export type PhotoFaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhotoFaceWhereInput | PhotoFaceWhereInput[]
    OR?: PhotoFaceWhereInput[]
    NOT?: PhotoFaceWhereInput | PhotoFaceWhereInput[]
    photo_id?: StringFilter<"PhotoFace"> | string
    face_profile_id?: StringFilter<"PhotoFace"> | string
    bbox_x?: IntFilter<"PhotoFace"> | number
    bbox_y?: IntFilter<"PhotoFace"> | number
    bbox_w?: IntFilter<"PhotoFace"> | number
    bbox_h?: IntFilter<"PhotoFace"> | number
    confidence?: FloatFilter<"PhotoFace"> | number
    photo?: XOR<PhotoScalarRelationFilter, PhotoWhereInput>
    face_profile?: XOR<FaceProfileScalarRelationFilter, FaceProfileWhereInput>
  }, "id">

  export type PhotoFaceOrderByWithAggregationInput = {
    id?: SortOrder
    photo_id?: SortOrder
    face_profile_id?: SortOrder
    bbox_x?: SortOrder
    bbox_y?: SortOrder
    bbox_w?: SortOrder
    bbox_h?: SortOrder
    confidence?: SortOrder
    _count?: PhotoFaceCountOrderByAggregateInput
    _avg?: PhotoFaceAvgOrderByAggregateInput
    _max?: PhotoFaceMaxOrderByAggregateInput
    _min?: PhotoFaceMinOrderByAggregateInput
    _sum?: PhotoFaceSumOrderByAggregateInput
  }

  export type PhotoFaceScalarWhereWithAggregatesInput = {
    AND?: PhotoFaceScalarWhereWithAggregatesInput | PhotoFaceScalarWhereWithAggregatesInput[]
    OR?: PhotoFaceScalarWhereWithAggregatesInput[]
    NOT?: PhotoFaceScalarWhereWithAggregatesInput | PhotoFaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PhotoFace"> | string
    photo_id?: StringWithAggregatesFilter<"PhotoFace"> | string
    face_profile_id?: StringWithAggregatesFilter<"PhotoFace"> | string
    bbox_x?: IntWithAggregatesFilter<"PhotoFace"> | number
    bbox_y?: IntWithAggregatesFilter<"PhotoFace"> | number
    bbox_w?: IntWithAggregatesFilter<"PhotoFace"> | number
    bbox_h?: IntWithAggregatesFilter<"PhotoFace"> | number
    confidence?: FloatWithAggregatesFilter<"PhotoFace"> | number
  }

  export type BlacklistWhereInput = {
    AND?: BlacklistWhereInput | BlacklistWhereInput[]
    OR?: BlacklistWhereInput[]
    NOT?: BlacklistWhereInput | BlacklistWhereInput[]
    id?: StringFilter<"Blacklist"> | string
    token?: StringFilter<"Blacklist"> | string
    expires_at?: DateTimeFilter<"Blacklist"> | Date | string
    created_at?: DateTimeFilter<"Blacklist"> | Date | string
  }

  export type BlacklistOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type BlacklistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: BlacklistWhereInput | BlacklistWhereInput[]
    OR?: BlacklistWhereInput[]
    NOT?: BlacklistWhereInput | BlacklistWhereInput[]
    expires_at?: DateTimeFilter<"Blacklist"> | Date | string
    created_at?: DateTimeFilter<"Blacklist"> | Date | string
  }, "id" | "token">

  export type BlacklistOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    _count?: BlacklistCountOrderByAggregateInput
    _max?: BlacklistMaxOrderByAggregateInput
    _min?: BlacklistMinOrderByAggregateInput
  }

  export type BlacklistScalarWhereWithAggregatesInput = {
    AND?: BlacklistScalarWhereWithAggregatesInput | BlacklistScalarWhereWithAggregatesInput[]
    OR?: BlacklistScalarWhereWithAggregatesInput[]
    NOT?: BlacklistScalarWhereWithAggregatesInput | BlacklistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blacklist"> | string
    token?: StringWithAggregatesFilter<"Blacklist"> | string
    expires_at?: DateTimeWithAggregatesFilter<"Blacklist"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Blacklist"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    user_id?: StringFilter<"RefreshToken"> | string
    expires_at?: DateTimeFilter<"RefreshToken"> | Date | string
    created_at?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    user_id?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    user_id?: StringFilter<"RefreshToken"> | string
    expires_at?: DateTimeFilter<"RefreshToken"> | Date | string
    created_at?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    user_id?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    user_id?: StringWithAggregatesFilter<"RefreshToken"> | string
    expires_at?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    events?: EventCreateNestedManyWithoutUserInput
    event_access?: EventAccessCreateNestedManyWithoutUserInput
    photos?: PhotoCreateNestedManyWithoutUserInput
    claimed_profiles?: FaceProfileCreateNestedManyWithoutClaimedInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutUserInput
    event_access?: EventAccessUncheckedCreateNestedManyWithoutUserInput
    photos?: PhotoUncheckedCreateNestedManyWithoutUserInput
    claimed_profiles?: FaceProfileUncheckedCreateNestedManyWithoutClaimedInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutUserNestedInput
    event_access?: EventAccessUpdateManyWithoutUserNestedInput
    photos?: PhotoUpdateManyWithoutUserNestedInput
    claimed_profiles?: FaceProfileUpdateManyWithoutClaimedNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
    event_access?: EventAccessUncheckedUpdateManyWithoutUserNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutUserNestedInput
    claimed_profiles?: FaceProfileUncheckedUpdateManyWithoutClaimedNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    name: string
    location: string
    date: Date | string
    invite_code: string
    is_active: boolean
    attendee_upload_limit?: number
    created_at?: Date | string
    user: UserCreateNestedOneWithoutEventsInput
    event_access?: EventAccessCreateNestedManyWithoutEventInput
    photos?: PhotoCreateNestedManyWithoutEventInput
    face_profiles?: FaceProfileCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    user_id: string
    name: string
    location: string
    date: Date | string
    invite_code: string
    is_active: boolean
    attendee_upload_limit?: number
    created_at?: Date | string
    event_access?: EventAccessUncheckedCreateNestedManyWithoutEventInput
    photos?: PhotoUncheckedCreateNestedManyWithoutEventInput
    face_profiles?: FaceProfileUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    invite_code?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    attendee_upload_limit?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventsNestedInput
    event_access?: EventAccessUpdateManyWithoutEventNestedInput
    photos?: PhotoUpdateManyWithoutEventNestedInput
    face_profiles?: FaceProfileUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    invite_code?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    attendee_upload_limit?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_access?: EventAccessUncheckedUpdateManyWithoutEventNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutEventNestedInput
    face_profiles?: FaceProfileUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    user_id: string
    name: string
    location: string
    date: Date | string
    invite_code: string
    is_active: boolean
    attendee_upload_limit?: number
    created_at?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    invite_code?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    attendee_upload_limit?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    invite_code?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    attendee_upload_limit?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAccessCreateInput = {
    id?: string
    role: $Enums.Role
    upload_count?: number
    joined_at?: Date | string
    event: EventCreateNestedOneWithoutEvent_accessInput
    user: UserCreateNestedOneWithoutEvent_accessInput
  }

  export type EventAccessUncheckedCreateInput = {
    id?: string
    event_id: string
    user_id: string
    role: $Enums.Role
    upload_count?: number
    joined_at?: Date | string
  }

  export type EventAccessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    upload_count?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutEvent_accessNestedInput
    user?: UserUpdateOneRequiredWithoutEvent_accessNestedInput
  }

  export type EventAccessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    upload_count?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAccessCreateManyInput = {
    id?: string
    event_id: string
    user_id: string
    role: $Enums.Role
    upload_count?: number
    joined_at?: Date | string
  }

  export type EventAccessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    upload_count?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAccessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    upload_count?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCreateInput = {
    id?: string
    storage_url: string
    uploaded_at?: Date | string
    processed: boolean
    is_visible: boolean
    event: EventCreateNestedOneWithoutPhotosInput
    user: UserCreateNestedOneWithoutPhotosInput
    photo_faces?: PhotoFaceCreateNestedManyWithoutPhotoInput
  }

  export type PhotoUncheckedCreateInput = {
    id?: string
    event_id: string
    user_id: string
    storage_url: string
    uploaded_at?: Date | string
    processed: boolean
    is_visible: boolean
    photo_faces?: PhotoFaceUncheckedCreateNestedManyWithoutPhotoInput
  }

  export type PhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storage_url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutPhotosNestedInput
    user?: UserUpdateOneRequiredWithoutPhotosNestedInput
    photo_faces?: PhotoFaceUpdateManyWithoutPhotoNestedInput
  }

  export type PhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    storage_url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    photo_faces?: PhotoFaceUncheckedUpdateManyWithoutPhotoNestedInput
  }

  export type PhotoCreateManyInput = {
    id?: string
    event_id: string
    user_id: string
    storage_url: string
    uploaded_at?: Date | string
    processed: boolean
    is_visible: boolean
  }

  export type PhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    storage_url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    storage_url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FaceProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_calimed?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutFace_profilesNestedInput
    claimed?: UserUpdateOneWithoutClaimed_profilesNestedInput
    photo_faces?: PhotoFaceUpdateManyWithoutFace_profileNestedInput
  }

  export type FaceProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    claimed_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_calimed?: BoolFieldUpdateOperationsInput | boolean
    photo_faces?: PhotoFaceUncheckedUpdateManyWithoutFace_profileNestedInput
  }

  export type FaceProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_calimed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FaceProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    claimed_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_calimed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhotoFaceCreateInput = {
    id?: string
    bbox_x: number
    bbox_y: number
    bbox_w: number
    bbox_h: number
    confidence: number
    photo: PhotoCreateNestedOneWithoutPhoto_facesInput
    face_profile: FaceProfileCreateNestedOneWithoutPhoto_facesInput
  }

  export type PhotoFaceUncheckedCreateInput = {
    id?: string
    photo_id: string
    face_profile_id: string
    bbox_x: number
    bbox_y: number
    bbox_w: number
    bbox_h: number
    confidence: number
  }

  export type PhotoFaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bbox_x?: IntFieldUpdateOperationsInput | number
    bbox_y?: IntFieldUpdateOperationsInput | number
    bbox_w?: IntFieldUpdateOperationsInput | number
    bbox_h?: IntFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    photo?: PhotoUpdateOneRequiredWithoutPhoto_facesNestedInput
    face_profile?: FaceProfileUpdateOneRequiredWithoutPhoto_facesNestedInput
  }

  export type PhotoFaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo_id?: StringFieldUpdateOperationsInput | string
    face_profile_id?: StringFieldUpdateOperationsInput | string
    bbox_x?: IntFieldUpdateOperationsInput | number
    bbox_y?: IntFieldUpdateOperationsInput | number
    bbox_w?: IntFieldUpdateOperationsInput | number
    bbox_h?: IntFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
  }

  export type PhotoFaceCreateManyInput = {
    id?: string
    photo_id: string
    face_profile_id: string
    bbox_x: number
    bbox_y: number
    bbox_w: number
    bbox_h: number
    confidence: number
  }

  export type PhotoFaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bbox_x?: IntFieldUpdateOperationsInput | number
    bbox_y?: IntFieldUpdateOperationsInput | number
    bbox_w?: IntFieldUpdateOperationsInput | number
    bbox_h?: IntFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
  }

  export type PhotoFaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo_id?: StringFieldUpdateOperationsInput | string
    face_profile_id?: StringFieldUpdateOperationsInput | string
    bbox_x?: IntFieldUpdateOperationsInput | number
    bbox_y?: IntFieldUpdateOperationsInput | number
    bbox_w?: IntFieldUpdateOperationsInput | number
    bbox_h?: IntFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
  }

  export type BlacklistCreateInput = {
    id?: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type BlacklistUncheckedCreateInput = {
    id?: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type BlacklistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistCreateManyInput = {
    id?: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type BlacklistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    user_id: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    token: string
    user_id: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventAccessListRelationFilter = {
    every?: EventAccessWhereInput
    some?: EventAccessWhereInput
    none?: EventAccessWhereInput
  }

  export type PhotoListRelationFilter = {
    every?: PhotoWhereInput
    some?: PhotoWhereInput
    none?: PhotoWhereInput
  }

  export type FaceProfileListRelationFilter = {
    every?: FaceProfileWhereInput
    some?: FaceProfileWhereInput
    none?: FaceProfileWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FaceProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    date?: SortOrder
    invite_code?: SortOrder
    is_active?: SortOrder
    attendee_upload_limit?: SortOrder
    created_at?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    attendee_upload_limit?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    date?: SortOrder
    invite_code?: SortOrder
    is_active?: SortOrder
    attendee_upload_limit?: SortOrder
    created_at?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    date?: SortOrder
    invite_code?: SortOrder
    is_active?: SortOrder
    attendee_upload_limit?: SortOrder
    created_at?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    attendee_upload_limit?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type EventAccessEvent_idUser_idCompoundUniqueInput = {
    event_id: string
    user_id: string
  }

  export type EventAccessCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    upload_count?: SortOrder
    joined_at?: SortOrder
  }

  export type EventAccessAvgOrderByAggregateInput = {
    upload_count?: SortOrder
  }

  export type EventAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    upload_count?: SortOrder
    joined_at?: SortOrder
  }

  export type EventAccessMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    upload_count?: SortOrder
    joined_at?: SortOrder
  }

  export type EventAccessSumOrderByAggregateInput = {
    upload_count?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type PhotoFaceListRelationFilter = {
    every?: PhotoFaceWhereInput
    some?: PhotoFaceWhereInput
    none?: PhotoFaceWhereInput
  }

  export type PhotoFaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    storage_url?: SortOrder
    uploaded_at?: SortOrder
    processed?: SortOrder
    is_visible?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    storage_url?: SortOrder
    uploaded_at?: SortOrder
    processed?: SortOrder
    is_visible?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    storage_url?: SortOrder
    uploaded_at?: SortOrder
    processed?: SortOrder
    is_visible?: SortOrder
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FaceProfileCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    claimed_by?: SortOrder
    is_calimed?: SortOrder
  }

  export type FaceProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    claimed_by?: SortOrder
    is_calimed?: SortOrder
  }

  export type FaceProfileMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    claimed_by?: SortOrder
    is_calimed?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PhotoScalarRelationFilter = {
    is?: PhotoWhereInput
    isNot?: PhotoWhereInput
  }

  export type FaceProfileScalarRelationFilter = {
    is?: FaceProfileWhereInput
    isNot?: FaceProfileWhereInput
  }

  export type PhotoFaceCountOrderByAggregateInput = {
    id?: SortOrder
    photo_id?: SortOrder
    face_profile_id?: SortOrder
    bbox_x?: SortOrder
    bbox_y?: SortOrder
    bbox_w?: SortOrder
    bbox_h?: SortOrder
    confidence?: SortOrder
  }

  export type PhotoFaceAvgOrderByAggregateInput = {
    bbox_x?: SortOrder
    bbox_y?: SortOrder
    bbox_w?: SortOrder
    bbox_h?: SortOrder
    confidence?: SortOrder
  }

  export type PhotoFaceMaxOrderByAggregateInput = {
    id?: SortOrder
    photo_id?: SortOrder
    face_profile_id?: SortOrder
    bbox_x?: SortOrder
    bbox_y?: SortOrder
    bbox_w?: SortOrder
    bbox_h?: SortOrder
    confidence?: SortOrder
  }

  export type PhotoFaceMinOrderByAggregateInput = {
    id?: SortOrder
    photo_id?: SortOrder
    face_profile_id?: SortOrder
    bbox_x?: SortOrder
    bbox_y?: SortOrder
    bbox_w?: SortOrder
    bbox_h?: SortOrder
    confidence?: SortOrder
  }

  export type PhotoFaceSumOrderByAggregateInput = {
    bbox_x?: SortOrder
    bbox_y?: SortOrder
    bbox_w?: SortOrder
    bbox_h?: SortOrder
    confidence?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BlacklistCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type BlacklistMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type BlacklistMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    user_id?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    user_id?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    user_id?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type EventCreateNestedManyWithoutUserInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventAccessCreateNestedManyWithoutUserInput = {
    create?: XOR<EventAccessCreateWithoutUserInput, EventAccessUncheckedCreateWithoutUserInput> | EventAccessCreateWithoutUserInput[] | EventAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventAccessCreateOrConnectWithoutUserInput | EventAccessCreateOrConnectWithoutUserInput[]
    createMany?: EventAccessCreateManyUserInputEnvelope
    connect?: EventAccessWhereUniqueInput | EventAccessWhereUniqueInput[]
  }

  export type PhotoCreateNestedManyWithoutUserInput = {
    create?: XOR<PhotoCreateWithoutUserInput, PhotoUncheckedCreateWithoutUserInput> | PhotoCreateWithoutUserInput[] | PhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutUserInput | PhotoCreateOrConnectWithoutUserInput[]
    createMany?: PhotoCreateManyUserInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type FaceProfileCreateNestedManyWithoutClaimedInput = {
    connect?: FaceProfileWhereUniqueInput | FaceProfileWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventAccessUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventAccessCreateWithoutUserInput, EventAccessUncheckedCreateWithoutUserInput> | EventAccessCreateWithoutUserInput[] | EventAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventAccessCreateOrConnectWithoutUserInput | EventAccessCreateOrConnectWithoutUserInput[]
    createMany?: EventAccessCreateManyUserInputEnvelope
    connect?: EventAccessWhereUniqueInput | EventAccessWhereUniqueInput[]
  }

  export type PhotoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PhotoCreateWithoutUserInput, PhotoUncheckedCreateWithoutUserInput> | PhotoCreateWithoutUserInput[] | PhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutUserInput | PhotoCreateOrConnectWithoutUserInput[]
    createMany?: PhotoCreateManyUserInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type FaceProfileUncheckedCreateNestedManyWithoutClaimedInput = {
    connect?: FaceProfileWhereUniqueInput | FaceProfileWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutUserInput | EventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutUserInput | EventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventUpdateManyWithWhereWithoutUserInput | EventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventAccessUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventAccessCreateWithoutUserInput, EventAccessUncheckedCreateWithoutUserInput> | EventAccessCreateWithoutUserInput[] | EventAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventAccessCreateOrConnectWithoutUserInput | EventAccessCreateOrConnectWithoutUserInput[]
    upsert?: EventAccessUpsertWithWhereUniqueWithoutUserInput | EventAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventAccessCreateManyUserInputEnvelope
    set?: EventAccessWhereUniqueInput | EventAccessWhereUniqueInput[]
    disconnect?: EventAccessWhereUniqueInput | EventAccessWhereUniqueInput[]
    delete?: EventAccessWhereUniqueInput | EventAccessWhereUniqueInput[]
    connect?: EventAccessWhereUniqueInput | EventAccessWhereUniqueInput[]
    update?: EventAccessUpdateWithWhereUniqueWithoutUserInput | EventAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventAccessUpdateManyWithWhereWithoutUserInput | EventAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventAccessScalarWhereInput | EventAccessScalarWhereInput[]
  }

  export type PhotoUpdateManyWithoutUserNestedInput = {
    create?: XOR<PhotoCreateWithoutUserInput, PhotoUncheckedCreateWithoutUserInput> | PhotoCreateWithoutUserInput[] | PhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutUserInput | PhotoCreateOrConnectWithoutUserInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutUserInput | PhotoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PhotoCreateManyUserInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutUserInput | PhotoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutUserInput | PhotoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type FaceProfileUpdateManyWithoutClaimedNestedInput = {
    set?: FaceProfileWhereUniqueInput | FaceProfileWhereUniqueInput[]
    disconnect?: FaceProfileWhereUniqueInput | FaceProfileWhereUniqueInput[]
    delete?: FaceProfileWhereUniqueInput | FaceProfileWhereUniqueInput[]
    connect?: FaceProfileWhereUniqueInput | FaceProfileWhereUniqueInput[]
    update?: FaceProfileUpdateWithWhereUniqueWithoutClaimedInput | FaceProfileUpdateWithWhereUniqueWithoutClaimedInput[]
    updateMany?: FaceProfileUpdateManyWithWhereWithoutClaimedInput | FaceProfileUpdateManyWithWhereWithoutClaimedInput[]
    deleteMany?: FaceProfileScalarWhereInput | FaceProfileScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutUserInput | EventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutUserInput | EventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventUpdateManyWithWhereWithoutUserInput | EventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventAccessUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventAccessCreateWithoutUserInput, EventAccessUncheckedCreateWithoutUserInput> | EventAccessCreateWithoutUserInput[] | EventAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventAccessCreateOrConnectWithoutUserInput | EventAccessCreateOrConnectWithoutUserInput[]
    upsert?: EventAccessUpsertWithWhereUniqueWithoutUserInput | EventAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventAccessCreateManyUserInputEnvelope
    set?: EventAccessWhereUniqueInput | EventAccessWhereUniqueInput[]
    disconnect?: EventAccessWhereUniqueInput | EventAccessWhereUniqueInput[]
    delete?: EventAccessWhereUniqueInput | EventAccessWhereUniqueInput[]
    connect?: EventAccessWhereUniqueInput | EventAccessWhereUniqueInput[]
    update?: EventAccessUpdateWithWhereUniqueWithoutUserInput | EventAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventAccessUpdateManyWithWhereWithoutUserInput | EventAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventAccessScalarWhereInput | EventAccessScalarWhereInput[]
  }

  export type PhotoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PhotoCreateWithoutUserInput, PhotoUncheckedCreateWithoutUserInput> | PhotoCreateWithoutUserInput[] | PhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutUserInput | PhotoCreateOrConnectWithoutUserInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutUserInput | PhotoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PhotoCreateManyUserInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutUserInput | PhotoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutUserInput | PhotoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type FaceProfileUncheckedUpdateManyWithoutClaimedNestedInput = {
    set?: FaceProfileWhereUniqueInput | FaceProfileWhereUniqueInput[]
    disconnect?: FaceProfileWhereUniqueInput | FaceProfileWhereUniqueInput[]
    delete?: FaceProfileWhereUniqueInput | FaceProfileWhereUniqueInput[]
    connect?: FaceProfileWhereUniqueInput | FaceProfileWhereUniqueInput[]
    update?: FaceProfileUpdateWithWhereUniqueWithoutClaimedInput | FaceProfileUpdateWithWhereUniqueWithoutClaimedInput[]
    updateMany?: FaceProfileUpdateManyWithWhereWithoutClaimedInput | FaceProfileUpdateManyWithWhereWithoutClaimedInput[]
    deleteMany?: FaceProfileScalarWhereInput | FaceProfileScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    connect?: UserWhereUniqueInput
  }

  export type EventAccessCreateNestedManyWithoutEventInput = {
    create?: XOR<EventAccessCreateWithoutEventInput, EventAccessUncheckedCreateWithoutEventInput> | EventAccessCreateWithoutEventInput[] | EventAccessUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAccessCreateOrConnectWithoutEventInput | EventAccessCreateOrConnectWithoutEventInput[]
    createMany?: EventAccessCreateManyEventInputEnvelope
    connect?: EventAccessWhereUniqueInput | EventAccessWhereUniqueInput[]
  }

  export type PhotoCreateNestedManyWithoutEventInput = {
    create?: XOR<PhotoCreateWithoutEventInput, PhotoUncheckedCreateWithoutEventInput> | PhotoCreateWithoutEventInput[] | PhotoUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutEventInput | PhotoCreateOrConnectWithoutEventInput[]
    createMany?: PhotoCreateManyEventInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type FaceProfileCreateNestedManyWithoutEventInput = {
    connect?: FaceProfileWhereUniqueInput | FaceProfileWhereUniqueInput[]
  }

  export type EventAccessUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventAccessCreateWithoutEventInput, EventAccessUncheckedCreateWithoutEventInput> | EventAccessCreateWithoutEventInput[] | EventAccessUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAccessCreateOrConnectWithoutEventInput | EventAccessCreateOrConnectWithoutEventInput[]
    createMany?: EventAccessCreateManyEventInputEnvelope
    connect?: EventAccessWhereUniqueInput | EventAccessWhereUniqueInput[]
  }

  export type PhotoUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<PhotoCreateWithoutEventInput, PhotoUncheckedCreateWithoutEventInput> | PhotoCreateWithoutEventInput[] | PhotoUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutEventInput | PhotoCreateOrConnectWithoutEventInput[]
    createMany?: PhotoCreateManyEventInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type FaceProfileUncheckedCreateNestedManyWithoutEventInput = {
    connect?: FaceProfileWhereUniqueInput | FaceProfileWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    upsert?: UserUpsertWithoutEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsInput, UserUpdateWithoutEventsInput>, UserUncheckedUpdateWithoutEventsInput>
  }

  export type EventAccessUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventAccessCreateWithoutEventInput, EventAccessUncheckedCreateWithoutEventInput> | EventAccessCreateWithoutEventInput[] | EventAccessUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAccessCreateOrConnectWithoutEventInput | EventAccessCreateOrConnectWithoutEventInput[]
    upsert?: EventAccessUpsertWithWhereUniqueWithoutEventInput | EventAccessUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventAccessCreateManyEventInputEnvelope
    set?: EventAccessWhereUniqueInput | EventAccessWhereUniqueInput[]
    disconnect?: EventAccessWhereUniqueInput | EventAccessWhereUniqueInput[]
    delete?: EventAccessWhereUniqueInput | EventAccessWhereUniqueInput[]
    connect?: EventAccessWhereUniqueInput | EventAccessWhereUniqueInput[]
    update?: EventAccessUpdateWithWhereUniqueWithoutEventInput | EventAccessUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventAccessUpdateManyWithWhereWithoutEventInput | EventAccessUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventAccessScalarWhereInput | EventAccessScalarWhereInput[]
  }

  export type PhotoUpdateManyWithoutEventNestedInput = {
    create?: XOR<PhotoCreateWithoutEventInput, PhotoUncheckedCreateWithoutEventInput> | PhotoCreateWithoutEventInput[] | PhotoUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutEventInput | PhotoCreateOrConnectWithoutEventInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutEventInput | PhotoUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: PhotoCreateManyEventInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutEventInput | PhotoUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutEventInput | PhotoUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type FaceProfileUpdateManyWithoutEventNestedInput = {
    set?: FaceProfileWhereUniqueInput | FaceProfileWhereUniqueInput[]
    disconnect?: FaceProfileWhereUniqueInput | FaceProfileWhereUniqueInput[]
    delete?: FaceProfileWhereUniqueInput | FaceProfileWhereUniqueInput[]
    connect?: FaceProfileWhereUniqueInput | FaceProfileWhereUniqueInput[]
    update?: FaceProfileUpdateWithWhereUniqueWithoutEventInput | FaceProfileUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: FaceProfileUpdateManyWithWhereWithoutEventInput | FaceProfileUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: FaceProfileScalarWhereInput | FaceProfileScalarWhereInput[]
  }

  export type EventAccessUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventAccessCreateWithoutEventInput, EventAccessUncheckedCreateWithoutEventInput> | EventAccessCreateWithoutEventInput[] | EventAccessUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAccessCreateOrConnectWithoutEventInput | EventAccessCreateOrConnectWithoutEventInput[]
    upsert?: EventAccessUpsertWithWhereUniqueWithoutEventInput | EventAccessUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventAccessCreateManyEventInputEnvelope
    set?: EventAccessWhereUniqueInput | EventAccessWhereUniqueInput[]
    disconnect?: EventAccessWhereUniqueInput | EventAccessWhereUniqueInput[]
    delete?: EventAccessWhereUniqueInput | EventAccessWhereUniqueInput[]
    connect?: EventAccessWhereUniqueInput | EventAccessWhereUniqueInput[]
    update?: EventAccessUpdateWithWhereUniqueWithoutEventInput | EventAccessUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventAccessUpdateManyWithWhereWithoutEventInput | EventAccessUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventAccessScalarWhereInput | EventAccessScalarWhereInput[]
  }

  export type PhotoUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<PhotoCreateWithoutEventInput, PhotoUncheckedCreateWithoutEventInput> | PhotoCreateWithoutEventInput[] | PhotoUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutEventInput | PhotoCreateOrConnectWithoutEventInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutEventInput | PhotoUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: PhotoCreateManyEventInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutEventInput | PhotoUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutEventInput | PhotoUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type FaceProfileUncheckedUpdateManyWithoutEventNestedInput = {
    set?: FaceProfileWhereUniqueInput | FaceProfileWhereUniqueInput[]
    disconnect?: FaceProfileWhereUniqueInput | FaceProfileWhereUniqueInput[]
    delete?: FaceProfileWhereUniqueInput | FaceProfileWhereUniqueInput[]
    connect?: FaceProfileWhereUniqueInput | FaceProfileWhereUniqueInput[]
    update?: FaceProfileUpdateWithWhereUniqueWithoutEventInput | FaceProfileUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: FaceProfileUpdateManyWithWhereWithoutEventInput | FaceProfileUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: FaceProfileScalarWhereInput | FaceProfileScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutEvent_accessInput = {
    create?: XOR<EventCreateWithoutEvent_accessInput, EventUncheckedCreateWithoutEvent_accessInput>
    connectOrCreate?: EventCreateOrConnectWithoutEvent_accessInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEvent_accessInput = {
    create?: XOR<UserCreateWithoutEvent_accessInput, UserUncheckedCreateWithoutEvent_accessInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvent_accessInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EventUpdateOneRequiredWithoutEvent_accessNestedInput = {
    create?: XOR<EventCreateWithoutEvent_accessInput, EventUncheckedCreateWithoutEvent_accessInput>
    connectOrCreate?: EventCreateOrConnectWithoutEvent_accessInput
    upsert?: EventUpsertWithoutEvent_accessInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEvent_accessInput, EventUpdateWithoutEvent_accessInput>, EventUncheckedUpdateWithoutEvent_accessInput>
  }

  export type UserUpdateOneRequiredWithoutEvent_accessNestedInput = {
    create?: XOR<UserCreateWithoutEvent_accessInput, UserUncheckedCreateWithoutEvent_accessInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvent_accessInput
    upsert?: UserUpsertWithoutEvent_accessInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEvent_accessInput, UserUpdateWithoutEvent_accessInput>, UserUncheckedUpdateWithoutEvent_accessInput>
  }

  export type EventCreateNestedOneWithoutPhotosInput = {
    create?: XOR<EventCreateWithoutPhotosInput, EventUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: EventCreateOrConnectWithoutPhotosInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPhotosInput = {
    create?: XOR<UserCreateWithoutPhotosInput, UserUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhotosInput
    connect?: UserWhereUniqueInput
  }

  export type PhotoFaceCreateNestedManyWithoutPhotoInput = {
    create?: XOR<PhotoFaceCreateWithoutPhotoInput, PhotoFaceUncheckedCreateWithoutPhotoInput> | PhotoFaceCreateWithoutPhotoInput[] | PhotoFaceUncheckedCreateWithoutPhotoInput[]
    connectOrCreate?: PhotoFaceCreateOrConnectWithoutPhotoInput | PhotoFaceCreateOrConnectWithoutPhotoInput[]
    createMany?: PhotoFaceCreateManyPhotoInputEnvelope
    connect?: PhotoFaceWhereUniqueInput | PhotoFaceWhereUniqueInput[]
  }

  export type PhotoFaceUncheckedCreateNestedManyWithoutPhotoInput = {
    create?: XOR<PhotoFaceCreateWithoutPhotoInput, PhotoFaceUncheckedCreateWithoutPhotoInput> | PhotoFaceCreateWithoutPhotoInput[] | PhotoFaceUncheckedCreateWithoutPhotoInput[]
    connectOrCreate?: PhotoFaceCreateOrConnectWithoutPhotoInput | PhotoFaceCreateOrConnectWithoutPhotoInput[]
    createMany?: PhotoFaceCreateManyPhotoInputEnvelope
    connect?: PhotoFaceWhereUniqueInput | PhotoFaceWhereUniqueInput[]
  }

  export type EventUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<EventCreateWithoutPhotosInput, EventUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: EventCreateOrConnectWithoutPhotosInput
    upsert?: EventUpsertWithoutPhotosInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutPhotosInput, EventUpdateWithoutPhotosInput>, EventUncheckedUpdateWithoutPhotosInput>
  }

  export type UserUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<UserCreateWithoutPhotosInput, UserUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhotosInput
    upsert?: UserUpsertWithoutPhotosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPhotosInput, UserUpdateWithoutPhotosInput>, UserUncheckedUpdateWithoutPhotosInput>
  }

  export type PhotoFaceUpdateManyWithoutPhotoNestedInput = {
    create?: XOR<PhotoFaceCreateWithoutPhotoInput, PhotoFaceUncheckedCreateWithoutPhotoInput> | PhotoFaceCreateWithoutPhotoInput[] | PhotoFaceUncheckedCreateWithoutPhotoInput[]
    connectOrCreate?: PhotoFaceCreateOrConnectWithoutPhotoInput | PhotoFaceCreateOrConnectWithoutPhotoInput[]
    upsert?: PhotoFaceUpsertWithWhereUniqueWithoutPhotoInput | PhotoFaceUpsertWithWhereUniqueWithoutPhotoInput[]
    createMany?: PhotoFaceCreateManyPhotoInputEnvelope
    set?: PhotoFaceWhereUniqueInput | PhotoFaceWhereUniqueInput[]
    disconnect?: PhotoFaceWhereUniqueInput | PhotoFaceWhereUniqueInput[]
    delete?: PhotoFaceWhereUniqueInput | PhotoFaceWhereUniqueInput[]
    connect?: PhotoFaceWhereUniqueInput | PhotoFaceWhereUniqueInput[]
    update?: PhotoFaceUpdateWithWhereUniqueWithoutPhotoInput | PhotoFaceUpdateWithWhereUniqueWithoutPhotoInput[]
    updateMany?: PhotoFaceUpdateManyWithWhereWithoutPhotoInput | PhotoFaceUpdateManyWithWhereWithoutPhotoInput[]
    deleteMany?: PhotoFaceScalarWhereInput | PhotoFaceScalarWhereInput[]
  }

  export type PhotoFaceUncheckedUpdateManyWithoutPhotoNestedInput = {
    create?: XOR<PhotoFaceCreateWithoutPhotoInput, PhotoFaceUncheckedCreateWithoutPhotoInput> | PhotoFaceCreateWithoutPhotoInput[] | PhotoFaceUncheckedCreateWithoutPhotoInput[]
    connectOrCreate?: PhotoFaceCreateOrConnectWithoutPhotoInput | PhotoFaceCreateOrConnectWithoutPhotoInput[]
    upsert?: PhotoFaceUpsertWithWhereUniqueWithoutPhotoInput | PhotoFaceUpsertWithWhereUniqueWithoutPhotoInput[]
    createMany?: PhotoFaceCreateManyPhotoInputEnvelope
    set?: PhotoFaceWhereUniqueInput | PhotoFaceWhereUniqueInput[]
    disconnect?: PhotoFaceWhereUniqueInput | PhotoFaceWhereUniqueInput[]
    delete?: PhotoFaceWhereUniqueInput | PhotoFaceWhereUniqueInput[]
    connect?: PhotoFaceWhereUniqueInput | PhotoFaceWhereUniqueInput[]
    update?: PhotoFaceUpdateWithWhereUniqueWithoutPhotoInput | PhotoFaceUpdateWithWhereUniqueWithoutPhotoInput[]
    updateMany?: PhotoFaceUpdateManyWithWhereWithoutPhotoInput | PhotoFaceUpdateManyWithWhereWithoutPhotoInput[]
    deleteMany?: PhotoFaceScalarWhereInput | PhotoFaceScalarWhereInput[]
  }

  export type EventUpdateOneRequiredWithoutFace_profilesNestedInput = {
    create?: XOR<EventCreateWithoutFace_profilesInput, EventUncheckedCreateWithoutFace_profilesInput>
    connectOrCreate?: EventCreateOrConnectWithoutFace_profilesInput
    upsert?: EventUpsertWithoutFace_profilesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutFace_profilesInput, EventUpdateWithoutFace_profilesInput>, EventUncheckedUpdateWithoutFace_profilesInput>
  }

  export type UserUpdateOneWithoutClaimed_profilesNestedInput = {
    create?: XOR<UserCreateWithoutClaimed_profilesInput, UserUncheckedCreateWithoutClaimed_profilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutClaimed_profilesInput
    upsert?: UserUpsertWithoutClaimed_profilesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClaimed_profilesInput, UserUpdateWithoutClaimed_profilesInput>, UserUncheckedUpdateWithoutClaimed_profilesInput>
  }

  export type PhotoFaceUpdateManyWithoutFace_profileNestedInput = {
    create?: XOR<PhotoFaceCreateWithoutFace_profileInput, PhotoFaceUncheckedCreateWithoutFace_profileInput> | PhotoFaceCreateWithoutFace_profileInput[] | PhotoFaceUncheckedCreateWithoutFace_profileInput[]
    connectOrCreate?: PhotoFaceCreateOrConnectWithoutFace_profileInput | PhotoFaceCreateOrConnectWithoutFace_profileInput[]
    upsert?: PhotoFaceUpsertWithWhereUniqueWithoutFace_profileInput | PhotoFaceUpsertWithWhereUniqueWithoutFace_profileInput[]
    createMany?: PhotoFaceCreateManyFace_profileInputEnvelope
    set?: PhotoFaceWhereUniqueInput | PhotoFaceWhereUniqueInput[]
    disconnect?: PhotoFaceWhereUniqueInput | PhotoFaceWhereUniqueInput[]
    delete?: PhotoFaceWhereUniqueInput | PhotoFaceWhereUniqueInput[]
    connect?: PhotoFaceWhereUniqueInput | PhotoFaceWhereUniqueInput[]
    update?: PhotoFaceUpdateWithWhereUniqueWithoutFace_profileInput | PhotoFaceUpdateWithWhereUniqueWithoutFace_profileInput[]
    updateMany?: PhotoFaceUpdateManyWithWhereWithoutFace_profileInput | PhotoFaceUpdateManyWithWhereWithoutFace_profileInput[]
    deleteMany?: PhotoFaceScalarWhereInput | PhotoFaceScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PhotoFaceUncheckedUpdateManyWithoutFace_profileNestedInput = {
    create?: XOR<PhotoFaceCreateWithoutFace_profileInput, PhotoFaceUncheckedCreateWithoutFace_profileInput> | PhotoFaceCreateWithoutFace_profileInput[] | PhotoFaceUncheckedCreateWithoutFace_profileInput[]
    connectOrCreate?: PhotoFaceCreateOrConnectWithoutFace_profileInput | PhotoFaceCreateOrConnectWithoutFace_profileInput[]
    upsert?: PhotoFaceUpsertWithWhereUniqueWithoutFace_profileInput | PhotoFaceUpsertWithWhereUniqueWithoutFace_profileInput[]
    createMany?: PhotoFaceCreateManyFace_profileInputEnvelope
    set?: PhotoFaceWhereUniqueInput | PhotoFaceWhereUniqueInput[]
    disconnect?: PhotoFaceWhereUniqueInput | PhotoFaceWhereUniqueInput[]
    delete?: PhotoFaceWhereUniqueInput | PhotoFaceWhereUniqueInput[]
    connect?: PhotoFaceWhereUniqueInput | PhotoFaceWhereUniqueInput[]
    update?: PhotoFaceUpdateWithWhereUniqueWithoutFace_profileInput | PhotoFaceUpdateWithWhereUniqueWithoutFace_profileInput[]
    updateMany?: PhotoFaceUpdateManyWithWhereWithoutFace_profileInput | PhotoFaceUpdateManyWithWhereWithoutFace_profileInput[]
    deleteMany?: PhotoFaceScalarWhereInput | PhotoFaceScalarWhereInput[]
  }

  export type PhotoCreateNestedOneWithoutPhoto_facesInput = {
    create?: XOR<PhotoCreateWithoutPhoto_facesInput, PhotoUncheckedCreateWithoutPhoto_facesInput>
    connectOrCreate?: PhotoCreateOrConnectWithoutPhoto_facesInput
    connect?: PhotoWhereUniqueInput
  }

  export type FaceProfileCreateNestedOneWithoutPhoto_facesInput = {
    connect?: FaceProfileWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PhotoUpdateOneRequiredWithoutPhoto_facesNestedInput = {
    create?: XOR<PhotoCreateWithoutPhoto_facesInput, PhotoUncheckedCreateWithoutPhoto_facesInput>
    connectOrCreate?: PhotoCreateOrConnectWithoutPhoto_facesInput
    upsert?: PhotoUpsertWithoutPhoto_facesInput
    connect?: PhotoWhereUniqueInput
    update?: XOR<XOR<PhotoUpdateToOneWithWhereWithoutPhoto_facesInput, PhotoUpdateWithoutPhoto_facesInput>, PhotoUncheckedUpdateWithoutPhoto_facesInput>
  }

  export type FaceProfileUpdateOneRequiredWithoutPhoto_facesNestedInput = {
    connect?: FaceProfileWhereUniqueInput
    update?: XOR<XOR<FaceProfileUpdateToOneWithWhereWithoutPhoto_facesInput, FaceProfileUpdateWithoutPhoto_facesInput>, FaceProfileUncheckedUpdateWithoutPhoto_facesInput>
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EventCreateWithoutUserInput = {
    id?: string
    name: string
    location: string
    date: Date | string
    invite_code: string
    is_active: boolean
    attendee_upload_limit?: number
    created_at?: Date | string
    event_access?: EventAccessCreateNestedManyWithoutEventInput
    photos?: PhotoCreateNestedManyWithoutEventInput
    face_profiles?: FaceProfileCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    location: string
    date: Date | string
    invite_code: string
    is_active: boolean
    attendee_upload_limit?: number
    created_at?: Date | string
    event_access?: EventAccessUncheckedCreateNestedManyWithoutEventInput
    photos?: PhotoUncheckedCreateNestedManyWithoutEventInput
    face_profiles?: FaceProfileUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutUserInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type EventCreateManyUserInputEnvelope = {
    data: EventCreateManyUserInput | EventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventAccessCreateWithoutUserInput = {
    id?: string
    role: $Enums.Role
    upload_count?: number
    joined_at?: Date | string
    event: EventCreateNestedOneWithoutEvent_accessInput
  }

  export type EventAccessUncheckedCreateWithoutUserInput = {
    id?: string
    event_id: string
    role: $Enums.Role
    upload_count?: number
    joined_at?: Date | string
  }

  export type EventAccessCreateOrConnectWithoutUserInput = {
    where: EventAccessWhereUniqueInput
    create: XOR<EventAccessCreateWithoutUserInput, EventAccessUncheckedCreateWithoutUserInput>
  }

  export type EventAccessCreateManyUserInputEnvelope = {
    data: EventAccessCreateManyUserInput | EventAccessCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PhotoCreateWithoutUserInput = {
    id?: string
    storage_url: string
    uploaded_at?: Date | string
    processed: boolean
    is_visible: boolean
    event: EventCreateNestedOneWithoutPhotosInput
    photo_faces?: PhotoFaceCreateNestedManyWithoutPhotoInput
  }

  export type PhotoUncheckedCreateWithoutUserInput = {
    id?: string
    event_id: string
    storage_url: string
    uploaded_at?: Date | string
    processed: boolean
    is_visible: boolean
    photo_faces?: PhotoFaceUncheckedCreateNestedManyWithoutPhotoInput
  }

  export type PhotoCreateOrConnectWithoutUserInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutUserInput, PhotoUncheckedCreateWithoutUserInput>
  }

  export type PhotoCreateManyUserInputEnvelope = {
    data: PhotoCreateManyUserInput | PhotoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type EventUpdateWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
  }

  export type EventUpdateManyWithWhereWithoutUserInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutUserInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    user_id?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    invite_code?: StringFilter<"Event"> | string
    is_active?: BoolFilter<"Event"> | boolean
    attendee_upload_limit?: IntFilter<"Event"> | number
    created_at?: DateTimeFilter<"Event"> | Date | string
  }

  export type EventAccessUpsertWithWhereUniqueWithoutUserInput = {
    where: EventAccessWhereUniqueInput
    update: XOR<EventAccessUpdateWithoutUserInput, EventAccessUncheckedUpdateWithoutUserInput>
    create: XOR<EventAccessCreateWithoutUserInput, EventAccessUncheckedCreateWithoutUserInput>
  }

  export type EventAccessUpdateWithWhereUniqueWithoutUserInput = {
    where: EventAccessWhereUniqueInput
    data: XOR<EventAccessUpdateWithoutUserInput, EventAccessUncheckedUpdateWithoutUserInput>
  }

  export type EventAccessUpdateManyWithWhereWithoutUserInput = {
    where: EventAccessScalarWhereInput
    data: XOR<EventAccessUpdateManyMutationInput, EventAccessUncheckedUpdateManyWithoutUserInput>
  }

  export type EventAccessScalarWhereInput = {
    AND?: EventAccessScalarWhereInput | EventAccessScalarWhereInput[]
    OR?: EventAccessScalarWhereInput[]
    NOT?: EventAccessScalarWhereInput | EventAccessScalarWhereInput[]
    id?: StringFilter<"EventAccess"> | string
    event_id?: StringFilter<"EventAccess"> | string
    user_id?: StringFilter<"EventAccess"> | string
    role?: EnumRoleFilter<"EventAccess"> | $Enums.Role
    upload_count?: IntFilter<"EventAccess"> | number
    joined_at?: DateTimeFilter<"EventAccess"> | Date | string
  }

  export type PhotoUpsertWithWhereUniqueWithoutUserInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutUserInput, PhotoUncheckedUpdateWithoutUserInput>
    create: XOR<PhotoCreateWithoutUserInput, PhotoUncheckedCreateWithoutUserInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutUserInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutUserInput, PhotoUncheckedUpdateWithoutUserInput>
  }

  export type PhotoUpdateManyWithWhereWithoutUserInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutUserInput>
  }

  export type PhotoScalarWhereInput = {
    AND?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    OR?: PhotoScalarWhereInput[]
    NOT?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    id?: StringFilter<"Photo"> | string
    event_id?: StringFilter<"Photo"> | string
    user_id?: StringFilter<"Photo"> | string
    storage_url?: StringFilter<"Photo"> | string
    uploaded_at?: DateTimeFilter<"Photo"> | Date | string
    processed?: BoolFilter<"Photo"> | boolean
    is_visible?: BoolFilter<"Photo"> | boolean
  }

  export type FaceProfileUpdateWithWhereUniqueWithoutClaimedInput = {
    where: FaceProfileWhereUniqueInput
    data: XOR<FaceProfileUpdateWithoutClaimedInput, FaceProfileUncheckedUpdateWithoutClaimedInput>
  }

  export type FaceProfileUpdateManyWithWhereWithoutClaimedInput = {
    where: FaceProfileScalarWhereInput
    data: XOR<FaceProfileUpdateManyMutationInput, FaceProfileUncheckedUpdateManyWithoutClaimedInput>
  }

  export type FaceProfileScalarWhereInput = {
    AND?: FaceProfileScalarWhereInput | FaceProfileScalarWhereInput[]
    OR?: FaceProfileScalarWhereInput[]
    NOT?: FaceProfileScalarWhereInput | FaceProfileScalarWhereInput[]
    id?: StringFilter<"FaceProfile"> | string
    event_id?: StringFilter<"FaceProfile"> | string
    claimed_by?: StringNullableFilter<"FaceProfile"> | string | null
    is_calimed?: BoolFilter<"FaceProfile"> | boolean
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    user_id?: StringFilter<"RefreshToken"> | string
    expires_at?: DateTimeFilter<"RefreshToken"> | Date | string
    created_at?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type UserCreateWithoutEventsInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    event_access?: EventAccessCreateNestedManyWithoutUserInput
    photos?: PhotoCreateNestedManyWithoutUserInput
    claimed_profiles?: FaceProfileCreateNestedManyWithoutClaimedInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    event_access?: EventAccessUncheckedCreateNestedManyWithoutUserInput
    photos?: PhotoUncheckedCreateNestedManyWithoutUserInput
    claimed_profiles?: FaceProfileUncheckedCreateNestedManyWithoutClaimedInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type EventAccessCreateWithoutEventInput = {
    id?: string
    role: $Enums.Role
    upload_count?: number
    joined_at?: Date | string
    user: UserCreateNestedOneWithoutEvent_accessInput
  }

  export type EventAccessUncheckedCreateWithoutEventInput = {
    id?: string
    user_id: string
    role: $Enums.Role
    upload_count?: number
    joined_at?: Date | string
  }

  export type EventAccessCreateOrConnectWithoutEventInput = {
    where: EventAccessWhereUniqueInput
    create: XOR<EventAccessCreateWithoutEventInput, EventAccessUncheckedCreateWithoutEventInput>
  }

  export type EventAccessCreateManyEventInputEnvelope = {
    data: EventAccessCreateManyEventInput | EventAccessCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type PhotoCreateWithoutEventInput = {
    id?: string
    storage_url: string
    uploaded_at?: Date | string
    processed: boolean
    is_visible: boolean
    user: UserCreateNestedOneWithoutPhotosInput
    photo_faces?: PhotoFaceCreateNestedManyWithoutPhotoInput
  }

  export type PhotoUncheckedCreateWithoutEventInput = {
    id?: string
    user_id: string
    storage_url: string
    uploaded_at?: Date | string
    processed: boolean
    is_visible: boolean
    photo_faces?: PhotoFaceUncheckedCreateNestedManyWithoutPhotoInput
  }

  export type PhotoCreateOrConnectWithoutEventInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutEventInput, PhotoUncheckedCreateWithoutEventInput>
  }

  export type PhotoCreateManyEventInputEnvelope = {
    data: PhotoCreateManyEventInput | PhotoCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEventsInput = {
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_access?: EventAccessUpdateManyWithoutUserNestedInput
    photos?: PhotoUpdateManyWithoutUserNestedInput
    claimed_profiles?: FaceProfileUpdateManyWithoutClaimedNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_access?: EventAccessUncheckedUpdateManyWithoutUserNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutUserNestedInput
    claimed_profiles?: FaceProfileUncheckedUpdateManyWithoutClaimedNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventAccessUpsertWithWhereUniqueWithoutEventInput = {
    where: EventAccessWhereUniqueInput
    update: XOR<EventAccessUpdateWithoutEventInput, EventAccessUncheckedUpdateWithoutEventInput>
    create: XOR<EventAccessCreateWithoutEventInput, EventAccessUncheckedCreateWithoutEventInput>
  }

  export type EventAccessUpdateWithWhereUniqueWithoutEventInput = {
    where: EventAccessWhereUniqueInput
    data: XOR<EventAccessUpdateWithoutEventInput, EventAccessUncheckedUpdateWithoutEventInput>
  }

  export type EventAccessUpdateManyWithWhereWithoutEventInput = {
    where: EventAccessScalarWhereInput
    data: XOR<EventAccessUpdateManyMutationInput, EventAccessUncheckedUpdateManyWithoutEventInput>
  }

  export type PhotoUpsertWithWhereUniqueWithoutEventInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutEventInput, PhotoUncheckedUpdateWithoutEventInput>
    create: XOR<PhotoCreateWithoutEventInput, PhotoUncheckedCreateWithoutEventInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutEventInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutEventInput, PhotoUncheckedUpdateWithoutEventInput>
  }

  export type PhotoUpdateManyWithWhereWithoutEventInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutEventInput>
  }

  export type FaceProfileUpdateWithWhereUniqueWithoutEventInput = {
    where: FaceProfileWhereUniqueInput
    data: XOR<FaceProfileUpdateWithoutEventInput, FaceProfileUncheckedUpdateWithoutEventInput>
  }

  export type FaceProfileUpdateManyWithWhereWithoutEventInput = {
    where: FaceProfileScalarWhereInput
    data: XOR<FaceProfileUpdateManyMutationInput, FaceProfileUncheckedUpdateManyWithoutEventInput>
  }

  export type EventCreateWithoutEvent_accessInput = {
    id?: string
    name: string
    location: string
    date: Date | string
    invite_code: string
    is_active: boolean
    attendee_upload_limit?: number
    created_at?: Date | string
    user: UserCreateNestedOneWithoutEventsInput
    photos?: PhotoCreateNestedManyWithoutEventInput
    face_profiles?: FaceProfileCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutEvent_accessInput = {
    id?: string
    user_id: string
    name: string
    location: string
    date: Date | string
    invite_code: string
    is_active: boolean
    attendee_upload_limit?: number
    created_at?: Date | string
    photos?: PhotoUncheckedCreateNestedManyWithoutEventInput
    face_profiles?: FaceProfileUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutEvent_accessInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEvent_accessInput, EventUncheckedCreateWithoutEvent_accessInput>
  }

  export type UserCreateWithoutEvent_accessInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    events?: EventCreateNestedManyWithoutUserInput
    photos?: PhotoCreateNestedManyWithoutUserInput
    claimed_profiles?: FaceProfileCreateNestedManyWithoutClaimedInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEvent_accessInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutUserInput
    photos?: PhotoUncheckedCreateNestedManyWithoutUserInput
    claimed_profiles?: FaceProfileUncheckedCreateNestedManyWithoutClaimedInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEvent_accessInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEvent_accessInput, UserUncheckedCreateWithoutEvent_accessInput>
  }

  export type EventUpsertWithoutEvent_accessInput = {
    update: XOR<EventUpdateWithoutEvent_accessInput, EventUncheckedUpdateWithoutEvent_accessInput>
    create: XOR<EventCreateWithoutEvent_accessInput, EventUncheckedCreateWithoutEvent_accessInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutEvent_accessInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutEvent_accessInput, EventUncheckedUpdateWithoutEvent_accessInput>
  }

  export type EventUpdateWithoutEvent_accessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    invite_code?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    attendee_upload_limit?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventsNestedInput
    photos?: PhotoUpdateManyWithoutEventNestedInput
    face_profiles?: FaceProfileUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutEvent_accessInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    invite_code?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    attendee_upload_limit?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: PhotoUncheckedUpdateManyWithoutEventNestedInput
    face_profiles?: FaceProfileUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutEvent_accessInput = {
    update: XOR<UserUpdateWithoutEvent_accessInput, UserUncheckedUpdateWithoutEvent_accessInput>
    create: XOR<UserCreateWithoutEvent_accessInput, UserUncheckedCreateWithoutEvent_accessInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEvent_accessInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEvent_accessInput, UserUncheckedUpdateWithoutEvent_accessInput>
  }

  export type UserUpdateWithoutEvent_accessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutUserNestedInput
    photos?: PhotoUpdateManyWithoutUserNestedInput
    claimed_profiles?: FaceProfileUpdateManyWithoutClaimedNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEvent_accessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutUserNestedInput
    claimed_profiles?: FaceProfileUncheckedUpdateManyWithoutClaimedNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventCreateWithoutPhotosInput = {
    id?: string
    name: string
    location: string
    date: Date | string
    invite_code: string
    is_active: boolean
    attendee_upload_limit?: number
    created_at?: Date | string
    user: UserCreateNestedOneWithoutEventsInput
    event_access?: EventAccessCreateNestedManyWithoutEventInput
    face_profiles?: FaceProfileCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutPhotosInput = {
    id?: string
    user_id: string
    name: string
    location: string
    date: Date | string
    invite_code: string
    is_active: boolean
    attendee_upload_limit?: number
    created_at?: Date | string
    event_access?: EventAccessUncheckedCreateNestedManyWithoutEventInput
    face_profiles?: FaceProfileUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutPhotosInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutPhotosInput, EventUncheckedCreateWithoutPhotosInput>
  }

  export type UserCreateWithoutPhotosInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    events?: EventCreateNestedManyWithoutUserInput
    event_access?: EventAccessCreateNestedManyWithoutUserInput
    claimed_profiles?: FaceProfileCreateNestedManyWithoutClaimedInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPhotosInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutUserInput
    event_access?: EventAccessUncheckedCreateNestedManyWithoutUserInput
    claimed_profiles?: FaceProfileUncheckedCreateNestedManyWithoutClaimedInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPhotosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPhotosInput, UserUncheckedCreateWithoutPhotosInput>
  }

  export type PhotoFaceCreateWithoutPhotoInput = {
    id?: string
    bbox_x: number
    bbox_y: number
    bbox_w: number
    bbox_h: number
    confidence: number
    face_profile: FaceProfileCreateNestedOneWithoutPhoto_facesInput
  }

  export type PhotoFaceUncheckedCreateWithoutPhotoInput = {
    id?: string
    face_profile_id: string
    bbox_x: number
    bbox_y: number
    bbox_w: number
    bbox_h: number
    confidence: number
  }

  export type PhotoFaceCreateOrConnectWithoutPhotoInput = {
    where: PhotoFaceWhereUniqueInput
    create: XOR<PhotoFaceCreateWithoutPhotoInput, PhotoFaceUncheckedCreateWithoutPhotoInput>
  }

  export type PhotoFaceCreateManyPhotoInputEnvelope = {
    data: PhotoFaceCreateManyPhotoInput | PhotoFaceCreateManyPhotoInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutPhotosInput = {
    update: XOR<EventUpdateWithoutPhotosInput, EventUncheckedUpdateWithoutPhotosInput>
    create: XOR<EventCreateWithoutPhotosInput, EventUncheckedCreateWithoutPhotosInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutPhotosInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutPhotosInput, EventUncheckedUpdateWithoutPhotosInput>
  }

  export type EventUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    invite_code?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    attendee_upload_limit?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventsNestedInput
    event_access?: EventAccessUpdateManyWithoutEventNestedInput
    face_profiles?: FaceProfileUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    invite_code?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    attendee_upload_limit?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_access?: EventAccessUncheckedUpdateManyWithoutEventNestedInput
    face_profiles?: FaceProfileUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutPhotosInput = {
    update: XOR<UserUpdateWithoutPhotosInput, UserUncheckedUpdateWithoutPhotosInput>
    create: XOR<UserCreateWithoutPhotosInput, UserUncheckedCreateWithoutPhotosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPhotosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPhotosInput, UserUncheckedUpdateWithoutPhotosInput>
  }

  export type UserUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutUserNestedInput
    event_access?: EventAccessUpdateManyWithoutUserNestedInput
    claimed_profiles?: FaceProfileUpdateManyWithoutClaimedNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
    event_access?: EventAccessUncheckedUpdateManyWithoutUserNestedInput
    claimed_profiles?: FaceProfileUncheckedUpdateManyWithoutClaimedNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PhotoFaceUpsertWithWhereUniqueWithoutPhotoInput = {
    where: PhotoFaceWhereUniqueInput
    update: XOR<PhotoFaceUpdateWithoutPhotoInput, PhotoFaceUncheckedUpdateWithoutPhotoInput>
    create: XOR<PhotoFaceCreateWithoutPhotoInput, PhotoFaceUncheckedCreateWithoutPhotoInput>
  }

  export type PhotoFaceUpdateWithWhereUniqueWithoutPhotoInput = {
    where: PhotoFaceWhereUniqueInput
    data: XOR<PhotoFaceUpdateWithoutPhotoInput, PhotoFaceUncheckedUpdateWithoutPhotoInput>
  }

  export type PhotoFaceUpdateManyWithWhereWithoutPhotoInput = {
    where: PhotoFaceScalarWhereInput
    data: XOR<PhotoFaceUpdateManyMutationInput, PhotoFaceUncheckedUpdateManyWithoutPhotoInput>
  }

  export type PhotoFaceScalarWhereInput = {
    AND?: PhotoFaceScalarWhereInput | PhotoFaceScalarWhereInput[]
    OR?: PhotoFaceScalarWhereInput[]
    NOT?: PhotoFaceScalarWhereInput | PhotoFaceScalarWhereInput[]
    id?: StringFilter<"PhotoFace"> | string
    photo_id?: StringFilter<"PhotoFace"> | string
    face_profile_id?: StringFilter<"PhotoFace"> | string
    bbox_x?: IntFilter<"PhotoFace"> | number
    bbox_y?: IntFilter<"PhotoFace"> | number
    bbox_w?: IntFilter<"PhotoFace"> | number
    bbox_h?: IntFilter<"PhotoFace"> | number
    confidence?: FloatFilter<"PhotoFace"> | number
  }

  export type EventCreateWithoutFace_profilesInput = {
    id?: string
    name: string
    location: string
    date: Date | string
    invite_code: string
    is_active: boolean
    attendee_upload_limit?: number
    created_at?: Date | string
    user: UserCreateNestedOneWithoutEventsInput
    event_access?: EventAccessCreateNestedManyWithoutEventInput
    photos?: PhotoCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutFace_profilesInput = {
    id?: string
    user_id: string
    name: string
    location: string
    date: Date | string
    invite_code: string
    is_active: boolean
    attendee_upload_limit?: number
    created_at?: Date | string
    event_access?: EventAccessUncheckedCreateNestedManyWithoutEventInput
    photos?: PhotoUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutFace_profilesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutFace_profilesInput, EventUncheckedCreateWithoutFace_profilesInput>
  }

  export type EventUpsertWithoutFace_profilesInput = {
    update: XOR<EventUpdateWithoutFace_profilesInput, EventUncheckedUpdateWithoutFace_profilesInput>
    create: XOR<EventCreateWithoutFace_profilesInput, EventUncheckedCreateWithoutFace_profilesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutFace_profilesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutFace_profilesInput, EventUncheckedUpdateWithoutFace_profilesInput>
  }

  export type EventUpdateWithoutFace_profilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    invite_code?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    attendee_upload_limit?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventsNestedInput
    event_access?: EventAccessUpdateManyWithoutEventNestedInput
    photos?: PhotoUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutFace_profilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    invite_code?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    attendee_upload_limit?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_access?: EventAccessUncheckedUpdateManyWithoutEventNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserCreateWithoutClaimed_profilesInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    events?: EventCreateNestedManyWithoutUserInput
    event_access?: EventAccessCreateNestedManyWithoutUserInput
    photos?: PhotoCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClaimed_profilesInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutUserInput
    event_access?: EventAccessUncheckedCreateNestedManyWithoutUserInput
    photos?: PhotoUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClaimed_profilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClaimed_profilesInput, UserUncheckedCreateWithoutClaimed_profilesInput>
  }

  export type UserUpsertWithoutClaimed_profilesInput = {
    update: XOR<UserUpdateWithoutClaimed_profilesInput, UserUncheckedUpdateWithoutClaimed_profilesInput>
    create: XOR<UserCreateWithoutClaimed_profilesInput, UserUncheckedCreateWithoutClaimed_profilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClaimed_profilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClaimed_profilesInput, UserUncheckedUpdateWithoutClaimed_profilesInput>
  }

  export type UserUpdateWithoutClaimed_profilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutUserNestedInput
    event_access?: EventAccessUpdateManyWithoutUserNestedInput
    photos?: PhotoUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClaimed_profilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
    event_access?: EventAccessUncheckedUpdateManyWithoutUserNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PhotoFaceCreateWithoutFace_profileInput = {
    id?: string
    bbox_x: number
    bbox_y: number
    bbox_w: number
    bbox_h: number
    confidence: number
    photo: PhotoCreateNestedOneWithoutPhoto_facesInput
  }

  export type PhotoFaceUncheckedCreateWithoutFace_profileInput = {
    id?: string
    photo_id: string
    bbox_x: number
    bbox_y: number
    bbox_w: number
    bbox_h: number
    confidence: number
  }

  export type PhotoFaceCreateOrConnectWithoutFace_profileInput = {
    where: PhotoFaceWhereUniqueInput
    create: XOR<PhotoFaceCreateWithoutFace_profileInput, PhotoFaceUncheckedCreateWithoutFace_profileInput>
  }

  export type PhotoFaceUpsertWithWhereUniqueWithoutFace_profileInput = {
    where: PhotoFaceWhereUniqueInput
    update: XOR<PhotoFaceUpdateWithoutFace_profileInput, PhotoFaceUncheckedUpdateWithoutFace_profileInput>
    create: XOR<PhotoFaceCreateWithoutFace_profileInput, PhotoFaceUncheckedCreateWithoutFace_profileInput>
  }

  export type PhotoFaceCreateManyFace_profileInputEnvelope = {
    data: PhotoFaceCreateManyFace_profileInput | PhotoFaceCreateManyFace_profileInput[]
    skipDuplicates?: boolean
  }

  export type PhotoFaceUpdateWithWhereUniqueWithoutFace_profileInput = {
    where: PhotoFaceWhereUniqueInput
    data: XOR<PhotoFaceUpdateWithoutFace_profileInput, PhotoFaceUncheckedUpdateWithoutFace_profileInput>
  }

  export type PhotoFaceUpdateManyWithWhereWithoutFace_profileInput = {
    where: PhotoFaceScalarWhereInput
    data: XOR<PhotoFaceUpdateManyMutationInput, PhotoFaceUncheckedUpdateManyWithoutFace_profileInput>
  }

  export type PhotoCreateWithoutPhoto_facesInput = {
    id?: string
    storage_url: string
    uploaded_at?: Date | string
    processed: boolean
    is_visible: boolean
    event: EventCreateNestedOneWithoutPhotosInput
    user: UserCreateNestedOneWithoutPhotosInput
  }

  export type PhotoUncheckedCreateWithoutPhoto_facesInput = {
    id?: string
    event_id: string
    user_id: string
    storage_url: string
    uploaded_at?: Date | string
    processed: boolean
    is_visible: boolean
  }

  export type PhotoCreateOrConnectWithoutPhoto_facesInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutPhoto_facesInput, PhotoUncheckedCreateWithoutPhoto_facesInput>
  }

  export type PhotoUpsertWithoutPhoto_facesInput = {
    update: XOR<PhotoUpdateWithoutPhoto_facesInput, PhotoUncheckedUpdateWithoutPhoto_facesInput>
    create: XOR<PhotoCreateWithoutPhoto_facesInput, PhotoUncheckedCreateWithoutPhoto_facesInput>
    where?: PhotoWhereInput
  }

  export type PhotoUpdateToOneWithWhereWithoutPhoto_facesInput = {
    where?: PhotoWhereInput
    data: XOR<PhotoUpdateWithoutPhoto_facesInput, PhotoUncheckedUpdateWithoutPhoto_facesInput>
  }

  export type PhotoUpdateWithoutPhoto_facesInput = {
    id?: StringFieldUpdateOperationsInput | string
    storage_url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutPhotosNestedInput
    user?: UserUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateWithoutPhoto_facesInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    storage_url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FaceProfileUpdateToOneWithWhereWithoutPhoto_facesInput = {
    where?: FaceProfileWhereInput
    data: XOR<FaceProfileUpdateWithoutPhoto_facesInput, FaceProfileUncheckedUpdateWithoutPhoto_facesInput>
  }

  export type FaceProfileUpdateWithoutPhoto_facesInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_calimed?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutFace_profilesNestedInput
    claimed?: UserUpdateOneWithoutClaimed_profilesNestedInput
  }

  export type FaceProfileUncheckedUpdateWithoutPhoto_facesInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    claimed_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_calimed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    events?: EventCreateNestedManyWithoutUserInput
    event_access?: EventAccessCreateNestedManyWithoutUserInput
    photos?: PhotoCreateNestedManyWithoutUserInput
    claimed_profiles?: FaceProfileCreateNestedManyWithoutClaimedInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    created_at?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutUserInput
    event_access?: EventAccessUncheckedCreateNestedManyWithoutUserInput
    photos?: PhotoUncheckedCreateNestedManyWithoutUserInput
    claimed_profiles?: FaceProfileUncheckedCreateNestedManyWithoutClaimedInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutUserNestedInput
    event_access?: EventAccessUpdateManyWithoutUserNestedInput
    photos?: PhotoUpdateManyWithoutUserNestedInput
    claimed_profiles?: FaceProfileUpdateManyWithoutClaimedNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
    event_access?: EventAccessUncheckedUpdateManyWithoutUserNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutUserNestedInput
    claimed_profiles?: FaceProfileUncheckedUpdateManyWithoutClaimedNestedInput
  }

  export type EventCreateManyUserInput = {
    id?: string
    name: string
    location: string
    date: Date | string
    invite_code: string
    is_active: boolean
    attendee_upload_limit?: number
    created_at?: Date | string
  }

  export type EventAccessCreateManyUserInput = {
    id?: string
    event_id: string
    role: $Enums.Role
    upload_count?: number
    joined_at?: Date | string
  }

  export type PhotoCreateManyUserInput = {
    id?: string
    event_id: string
    storage_url: string
    uploaded_at?: Date | string
    processed: boolean
    is_visible: boolean
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    expires_at: Date | string
    created_at?: Date | string
  }

  export type EventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    invite_code?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    attendee_upload_limit?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_access?: EventAccessUpdateManyWithoutEventNestedInput
    photos?: PhotoUpdateManyWithoutEventNestedInput
    face_profiles?: FaceProfileUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    invite_code?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    attendee_upload_limit?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_access?: EventAccessUncheckedUpdateManyWithoutEventNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutEventNestedInput
    face_profiles?: FaceProfileUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    invite_code?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    attendee_upload_limit?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAccessUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    upload_count?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutEvent_accessNestedInput
  }

  export type EventAccessUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    upload_count?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAccessUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    upload_count?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    storage_url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutPhotosNestedInput
    photo_faces?: PhotoFaceUpdateManyWithoutPhotoNestedInput
  }

  export type PhotoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    storage_url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    photo_faces?: PhotoFaceUncheckedUpdateManyWithoutPhotoNestedInput
  }

  export type PhotoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    storage_url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FaceProfileUpdateWithoutClaimedInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_calimed?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutFace_profilesNestedInput
    photo_faces?: PhotoFaceUpdateManyWithoutFace_profileNestedInput
  }

  export type FaceProfileUncheckedUpdateWithoutClaimedInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    is_calimed?: BoolFieldUpdateOperationsInput | boolean
    photo_faces?: PhotoFaceUncheckedUpdateManyWithoutFace_profileNestedInput
  }

  export type FaceProfileUncheckedUpdateManyWithoutClaimedInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    is_calimed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAccessCreateManyEventInput = {
    id?: string
    user_id: string
    role: $Enums.Role
    upload_count?: number
    joined_at?: Date | string
  }

  export type PhotoCreateManyEventInput = {
    id?: string
    user_id: string
    storage_url: string
    uploaded_at?: Date | string
    processed: boolean
    is_visible: boolean
  }

  export type EventAccessUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    upload_count?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEvent_accessNestedInput
  }

  export type EventAccessUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    upload_count?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAccessUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    upload_count?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    storage_url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPhotosNestedInput
    photo_faces?: PhotoFaceUpdateManyWithoutPhotoNestedInput
  }

  export type PhotoUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    storage_url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    photo_faces?: PhotoFaceUncheckedUpdateManyWithoutPhotoNestedInput
  }

  export type PhotoUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    storage_url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FaceProfileUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_calimed?: BoolFieldUpdateOperationsInput | boolean
    claimed?: UserUpdateOneWithoutClaimed_profilesNestedInput
    photo_faces?: PhotoFaceUpdateManyWithoutFace_profileNestedInput
  }

  export type FaceProfileUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimed_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_calimed?: BoolFieldUpdateOperationsInput | boolean
    photo_faces?: PhotoFaceUncheckedUpdateManyWithoutFace_profileNestedInput
  }

  export type FaceProfileUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimed_by?: NullableStringFieldUpdateOperationsInput | string | null
    is_calimed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhotoFaceCreateManyPhotoInput = {
    id?: string
    face_profile_id: string
    bbox_x: number
    bbox_y: number
    bbox_w: number
    bbox_h: number
    confidence: number
  }

  export type PhotoFaceUpdateWithoutPhotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    bbox_x?: IntFieldUpdateOperationsInput | number
    bbox_y?: IntFieldUpdateOperationsInput | number
    bbox_w?: IntFieldUpdateOperationsInput | number
    bbox_h?: IntFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    face_profile?: FaceProfileUpdateOneRequiredWithoutPhoto_facesNestedInput
  }

  export type PhotoFaceUncheckedUpdateWithoutPhotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    face_profile_id?: StringFieldUpdateOperationsInput | string
    bbox_x?: IntFieldUpdateOperationsInput | number
    bbox_y?: IntFieldUpdateOperationsInput | number
    bbox_w?: IntFieldUpdateOperationsInput | number
    bbox_h?: IntFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
  }

  export type PhotoFaceUncheckedUpdateManyWithoutPhotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    face_profile_id?: StringFieldUpdateOperationsInput | string
    bbox_x?: IntFieldUpdateOperationsInput | number
    bbox_y?: IntFieldUpdateOperationsInput | number
    bbox_w?: IntFieldUpdateOperationsInput | number
    bbox_h?: IntFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
  }

  export type PhotoFaceUpdateWithoutFace_profileInput = {
    id?: StringFieldUpdateOperationsInput | string
    bbox_x?: IntFieldUpdateOperationsInput | number
    bbox_y?: IntFieldUpdateOperationsInput | number
    bbox_w?: IntFieldUpdateOperationsInput | number
    bbox_h?: IntFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    photo?: PhotoUpdateOneRequiredWithoutPhoto_facesNestedInput
  }

  export type PhotoFaceUncheckedUpdateWithoutFace_profileInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo_id?: StringFieldUpdateOperationsInput | string
    bbox_x?: IntFieldUpdateOperationsInput | number
    bbox_y?: IntFieldUpdateOperationsInput | number
    bbox_w?: IntFieldUpdateOperationsInput | number
    bbox_h?: IntFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
  }

  export type PhotoFaceCreateManyFace_profileInput = {
    id?: string
    photo_id: string
    bbox_x: number
    bbox_y: number
    bbox_w: number
    bbox_h: number
    confidence: number
  }

  export type PhotoFaceUncheckedUpdateManyWithoutFace_profileInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo_id?: StringFieldUpdateOperationsInput | string
    bbox_x?: IntFieldUpdateOperationsInput | number
    bbox_y?: IntFieldUpdateOperationsInput | number
    bbox_w?: IntFieldUpdateOperationsInput | number
    bbox_h?: IntFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
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