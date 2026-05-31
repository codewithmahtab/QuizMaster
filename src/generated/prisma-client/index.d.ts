
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model Tournament
 * 
 */
export type Tournament = $Result.DefaultSelection<Prisma.$TournamentPayload>
/**
 * Model TournamentEntry
 * 
 */
export type TournamentEntry = $Result.DefaultSelection<Prisma.$TournamentEntryPayload>
/**
 * Model ShopItem
 * 
 */
export type ShopItem = $Result.DefaultSelection<Prisma.$ShopItemPayload>
/**
 * Model Purchase
 * 
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>
/**
 * Model DailyQuizCompletion
 * 
 */
export type DailyQuizCompletion = $Result.DefaultSelection<Prisma.$DailyQuizCompletionPayload>
/**
 * Model WeeklyStats
 * 
 */
export type WeeklyStats = $Result.DefaultSelection<Prisma.$WeeklyStatsPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model GeneralProgress
 * 
 */
export type GeneralProgress = $Result.DefaultSelection<Prisma.$GeneralProgressPayload>

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tournament`: Exposes CRUD operations for the **Tournament** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tournaments
    * const tournaments = await prisma.tournament.findMany()
    * ```
    */
  get tournament(): Prisma.TournamentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tournamentEntry`: Exposes CRUD operations for the **TournamentEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TournamentEntries
    * const tournamentEntries = await prisma.tournamentEntry.findMany()
    * ```
    */
  get tournamentEntry(): Prisma.TournamentEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shopItem`: Exposes CRUD operations for the **ShopItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopItems
    * const shopItems = await prisma.shopItem.findMany()
    * ```
    */
  get shopItem(): Prisma.ShopItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyQuizCompletion`: Exposes CRUD operations for the **DailyQuizCompletion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyQuizCompletions
    * const dailyQuizCompletions = await prisma.dailyQuizCompletion.findMany()
    * ```
    */
  get dailyQuizCompletion(): Prisma.DailyQuizCompletionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weeklyStats`: Exposes CRUD operations for the **WeeklyStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeeklyStats
    * const weeklyStats = await prisma.weeklyStats.findMany()
    * ```
    */
  get weeklyStats(): Prisma.WeeklyStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generalProgress`: Exposes CRUD operations for the **GeneralProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneralProgresses
    * const generalProgresses = await prisma.generalProgress.findMany()
    * ```
    */
  get generalProgress(): Prisma.GeneralProgressDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Question: 'Question',
    Match: 'Match',
    Tournament: 'Tournament',
    TournamentEntry: 'TournamentEntry',
    ShopItem: 'ShopItem',
    Purchase: 'Purchase',
    DailyQuizCompletion: 'DailyQuizCompletion',
    WeeklyStats: 'WeeklyStats',
    Notification: 'Notification',
    GeneralProgress: 'GeneralProgress'
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
      modelProps: "user" | "account" | "session" | "verificationToken" | "question" | "match" | "tournament" | "tournamentEntry" | "shopItem" | "purchase" | "dailyQuizCompletion" | "weeklyStats" | "notification" | "generalProgress"
      txIsolationLevel: never
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AccountFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AccountAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SessionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SessionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VerificationTokenFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VerificationTokenAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.QuestionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.QuestionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MatchFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MatchAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      Tournament: {
        payload: Prisma.$TournamentPayload<ExtArgs>
        fields: Prisma.TournamentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findFirst: {
            args: Prisma.TournamentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findMany: {
            args: Prisma.TournamentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          create: {
            args: Prisma.TournamentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          createMany: {
            args: Prisma.TournamentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TournamentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          update: {
            args: Prisma.TournamentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          deleteMany: {
            args: Prisma.TournamentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TournamentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          aggregate: {
            args: Prisma.TournamentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournament>
          }
          groupBy: {
            args: Prisma.TournamentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TournamentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TournamentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TournamentCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentCountAggregateOutputType> | number
          }
        }
      }
      TournamentEntry: {
        payload: Prisma.$TournamentEntryPayload<ExtArgs>
        fields: Prisma.TournamentEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentEntryPayload>
          }
          findFirst: {
            args: Prisma.TournamentEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentEntryPayload>
          }
          findMany: {
            args: Prisma.TournamentEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentEntryPayload>[]
          }
          create: {
            args: Prisma.TournamentEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentEntryPayload>
          }
          createMany: {
            args: Prisma.TournamentEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TournamentEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentEntryPayload>
          }
          update: {
            args: Prisma.TournamentEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentEntryPayload>
          }
          deleteMany: {
            args: Prisma.TournamentEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TournamentEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentEntryPayload>
          }
          aggregate: {
            args: Prisma.TournamentEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournamentEntry>
          }
          groupBy: {
            args: Prisma.TournamentEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentEntryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TournamentEntryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TournamentEntryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TournamentEntryCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentEntryCountAggregateOutputType> | number
          }
        }
      }
      ShopItem: {
        payload: Prisma.$ShopItemPayload<ExtArgs>
        fields: Prisma.ShopItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>
          }
          findFirst: {
            args: Prisma.ShopItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>
          }
          findMany: {
            args: Prisma.ShopItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>[]
          }
          create: {
            args: Prisma.ShopItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>
          }
          createMany: {
            args: Prisma.ShopItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShopItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>
          }
          update: {
            args: Prisma.ShopItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>
          }
          deleteMany: {
            args: Prisma.ShopItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShopItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>
          }
          aggregate: {
            args: Prisma.ShopItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopItem>
          }
          groupBy: {
            args: Prisma.ShopItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopItemGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ShopItemFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ShopItemAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ShopItemCountArgs<ExtArgs>
            result: $Utils.Optional<ShopItemCountAggregateOutputType> | number
          }
        }
      }
      Purchase: {
        payload: Prisma.$PurchasePayload<ExtArgs>
        fields: Prisma.PurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findFirst: {
            args: Prisma.PurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findMany: {
            args: Prisma.PurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          create: {
            args: Prisma.PurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          createMany: {
            args: Prisma.PurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          update: {
            args: Prisma.PurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.PurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PurchaseFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PurchaseAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
      DailyQuizCompletion: {
        payload: Prisma.$DailyQuizCompletionPayload<ExtArgs>
        fields: Prisma.DailyQuizCompletionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyQuizCompletionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyQuizCompletionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyQuizCompletionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyQuizCompletionPayload>
          }
          findFirst: {
            args: Prisma.DailyQuizCompletionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyQuizCompletionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyQuizCompletionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyQuizCompletionPayload>
          }
          findMany: {
            args: Prisma.DailyQuizCompletionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyQuizCompletionPayload>[]
          }
          create: {
            args: Prisma.DailyQuizCompletionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyQuizCompletionPayload>
          }
          createMany: {
            args: Prisma.DailyQuizCompletionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DailyQuizCompletionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyQuizCompletionPayload>
          }
          update: {
            args: Prisma.DailyQuizCompletionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyQuizCompletionPayload>
          }
          deleteMany: {
            args: Prisma.DailyQuizCompletionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyQuizCompletionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyQuizCompletionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyQuizCompletionPayload>
          }
          aggregate: {
            args: Prisma.DailyQuizCompletionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyQuizCompletion>
          }
          groupBy: {
            args: Prisma.DailyQuizCompletionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyQuizCompletionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DailyQuizCompletionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DailyQuizCompletionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DailyQuizCompletionCountArgs<ExtArgs>
            result: $Utils.Optional<DailyQuizCompletionCountAggregateOutputType> | number
          }
        }
      }
      WeeklyStats: {
        payload: Prisma.$WeeklyStatsPayload<ExtArgs>
        fields: Prisma.WeeklyStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeeklyStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeeklyStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyStatsPayload>
          }
          findFirst: {
            args: Prisma.WeeklyStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeeklyStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyStatsPayload>
          }
          findMany: {
            args: Prisma.WeeklyStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyStatsPayload>[]
          }
          create: {
            args: Prisma.WeeklyStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyStatsPayload>
          }
          createMany: {
            args: Prisma.WeeklyStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WeeklyStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyStatsPayload>
          }
          update: {
            args: Prisma.WeeklyStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyStatsPayload>
          }
          deleteMany: {
            args: Prisma.WeeklyStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeeklyStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WeeklyStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyStatsPayload>
          }
          aggregate: {
            args: Prisma.WeeklyStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeeklyStats>
          }
          groupBy: {
            args: Prisma.WeeklyStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeeklyStatsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.WeeklyStatsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.WeeklyStatsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.WeeklyStatsCountArgs<ExtArgs>
            result: $Utils.Optional<WeeklyStatsCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.NotificationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.NotificationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      GeneralProgress: {
        payload: Prisma.$GeneralProgressPayload<ExtArgs>
        fields: Prisma.GeneralProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneralProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneralProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralProgressPayload>
          }
          findFirst: {
            args: Prisma.GeneralProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneralProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralProgressPayload>
          }
          findMany: {
            args: Prisma.GeneralProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralProgressPayload>[]
          }
          create: {
            args: Prisma.GeneralProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralProgressPayload>
          }
          createMany: {
            args: Prisma.GeneralProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GeneralProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralProgressPayload>
          }
          update: {
            args: Prisma.GeneralProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralProgressPayload>
          }
          deleteMany: {
            args: Prisma.GeneralProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneralProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GeneralProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralProgressPayload>
          }
          aggregate: {
            args: Prisma.GeneralProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneralProgress>
          }
          groupBy: {
            args: Prisma.GeneralProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneralProgressGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GeneralProgressFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.GeneralProgressAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.GeneralProgressCountArgs<ExtArgs>
            result: $Utils.Optional<GeneralProgressCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    question?: QuestionOmit
    match?: MatchOmit
    tournament?: TournamentOmit
    tournamentEntry?: TournamentEntryOmit
    shopItem?: ShopItemOmit
    purchase?: PurchaseOmit
    dailyQuizCompletion?: DailyQuizCompletionOmit
    weeklyStats?: WeeklyStatsOmit
    notification?: NotificationOmit
    generalProgress?: GeneralProgressOmit
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
    matchesAsP1: number
    matchesAsP2: number
    purchases: number
    weeklyStats: number
    dailyCompletions: number
    tournamentEntries: number
    accounts: number
    sessions: number
    notifications: number
    generalProgress: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matchesAsP1?: boolean | UserCountOutputTypeCountMatchesAsP1Args
    matchesAsP2?: boolean | UserCountOutputTypeCountMatchesAsP2Args
    purchases?: boolean | UserCountOutputTypeCountPurchasesArgs
    weeklyStats?: boolean | UserCountOutputTypeCountWeeklyStatsArgs
    dailyCompletions?: boolean | UserCountOutputTypeCountDailyCompletionsArgs
    tournamentEntries?: boolean | UserCountOutputTypeCountTournamentEntriesArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    generalProgress?: boolean | UserCountOutputTypeCountGeneralProgressArgs
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
  export type UserCountOutputTypeCountMatchesAsP1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesAsP2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWeeklyStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyStatsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyQuizCompletionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTournamentEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGeneralProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneralProgressWhereInput
  }


  /**
   * Count Type TournamentCountOutputType
   */

  export type TournamentCountOutputType = {
    entries: number
    matches: number
  }

  export type TournamentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | TournamentCountOutputTypeCountEntriesArgs
    matches?: boolean | TournamentCountOutputTypeCountMatchesArgs
  }

  // Custom InputTypes
  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentCountOutputType
     */
    select?: TournamentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentEntryWhereInput
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
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
    level: number | null
    xp: number | null
    coins: number | null
    rankedPoints: number | null
    totalWins: number | null
    totalMatches: number | null
    longestStreak: number | null
    loginStreak: number | null
  }

  export type UserSumAggregateOutputType = {
    level: number | null
    xp: number | null
    coins: number | null
    rankedPoints: number | null
    totalWins: number | null
    totalMatches: number | null
    longestStreak: number | null
    loginStreak: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    avatarUrl: string | null
    avatarFrameId: string | null
    bio: string | null
    level: number | null
    xp: number | null
    coins: number | null
    rankedPoints: number | null
    totalWins: number | null
    totalMatches: number | null
    longestStreak: number | null
    loginStreak: number | null
    lastLoginDate: Date | null
    lastSpinDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    avatarUrl: string | null
    avatarFrameId: string | null
    bio: string | null
    level: number | null
    xp: number | null
    coins: number | null
    rankedPoints: number | null
    totalWins: number | null
    totalMatches: number | null
    longestStreak: number | null
    loginStreak: number | null
    lastLoginDate: Date | null
    lastSpinDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    passwordHash: number
    avatarUrl: number
    avatarFrameId: number
    bio: number
    level: number
    xp: number
    coins: number
    rankedPoints: number
    totalWins: number
    totalMatches: number
    longestStreak: number
    loginStreak: number
    lastLoginDate: number
    lastSpinDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    level?: true
    xp?: true
    coins?: true
    rankedPoints?: true
    totalWins?: true
    totalMatches?: true
    longestStreak?: true
    loginStreak?: true
  }

  export type UserSumAggregateInputType = {
    level?: true
    xp?: true
    coins?: true
    rankedPoints?: true
    totalWins?: true
    totalMatches?: true
    longestStreak?: true
    loginStreak?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    avatarUrl?: true
    avatarFrameId?: true
    bio?: true
    level?: true
    xp?: true
    coins?: true
    rankedPoints?: true
    totalWins?: true
    totalMatches?: true
    longestStreak?: true
    loginStreak?: true
    lastLoginDate?: true
    lastSpinDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    avatarUrl?: true
    avatarFrameId?: true
    bio?: true
    level?: true
    xp?: true
    coins?: true
    rankedPoints?: true
    totalWins?: true
    totalMatches?: true
    longestStreak?: true
    loginStreak?: true
    lastLoginDate?: true
    lastSpinDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    avatarUrl?: true
    avatarFrameId?: true
    bio?: true
    level?: true
    xp?: true
    coins?: true
    rankedPoints?: true
    totalWins?: true
    totalMatches?: true
    longestStreak?: true
    loginStreak?: true
    lastLoginDate?: true
    lastSpinDate?: true
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
    id: string
    username: string
    email: string
    passwordHash: string | null
    avatarUrl: string | null
    avatarFrameId: string | null
    bio: string | null
    level: number
    xp: number
    coins: number
    rankedPoints: number
    totalWins: number
    totalMatches: number
    longestStreak: number
    loginStreak: number
    lastLoginDate: Date | null
    lastSpinDate: Date | null
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
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    avatarUrl?: boolean
    avatarFrameId?: boolean
    bio?: boolean
    level?: boolean
    xp?: boolean
    coins?: boolean
    rankedPoints?: boolean
    totalWins?: boolean
    totalMatches?: boolean
    longestStreak?: boolean
    loginStreak?: boolean
    lastLoginDate?: boolean
    lastSpinDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    matchesAsP1?: boolean | User$matchesAsP1Args<ExtArgs>
    matchesAsP2?: boolean | User$matchesAsP2Args<ExtArgs>
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    weeklyStats?: boolean | User$weeklyStatsArgs<ExtArgs>
    dailyCompletions?: boolean | User$dailyCompletionsArgs<ExtArgs>
    tournamentEntries?: boolean | User$tournamentEntriesArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    generalProgress?: boolean | User$generalProgressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    avatarUrl?: boolean
    avatarFrameId?: boolean
    bio?: boolean
    level?: boolean
    xp?: boolean
    coins?: boolean
    rankedPoints?: boolean
    totalWins?: boolean
    totalMatches?: boolean
    longestStreak?: boolean
    loginStreak?: boolean
    lastLoginDate?: boolean
    lastSpinDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "passwordHash" | "avatarUrl" | "avatarFrameId" | "bio" | "level" | "xp" | "coins" | "rankedPoints" | "totalWins" | "totalMatches" | "longestStreak" | "loginStreak" | "lastLoginDate" | "lastSpinDate" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matchesAsP1?: boolean | User$matchesAsP1Args<ExtArgs>
    matchesAsP2?: boolean | User$matchesAsP2Args<ExtArgs>
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    weeklyStats?: boolean | User$weeklyStatsArgs<ExtArgs>
    dailyCompletions?: boolean | User$dailyCompletionsArgs<ExtArgs>
    tournamentEntries?: boolean | User$tournamentEntriesArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    generalProgress?: boolean | User$generalProgressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      matchesAsP1: Prisma.$MatchPayload<ExtArgs>[]
      matchesAsP2: Prisma.$MatchPayload<ExtArgs>[]
      purchases: Prisma.$PurchasePayload<ExtArgs>[]
      weeklyStats: Prisma.$WeeklyStatsPayload<ExtArgs>[]
      dailyCompletions: Prisma.$DailyQuizCompletionPayload<ExtArgs>[]
      tournamentEntries: Prisma.$TournamentEntryPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      generalProgress: Prisma.$GeneralProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      passwordHash: string | null
      avatarUrl: string | null
      avatarFrameId: string | null
      bio: string | null
      level: number
      xp: number
      coins: number
      rankedPoints: number
      totalWins: number
      totalMatches: number
      longestStreak: number
      loginStreak: number
      lastLoginDate: Date | null
      lastSpinDate: Date | null
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
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    matchesAsP1<T extends User$matchesAsP1Args<ExtArgs> = {}>(args?: Subset<T, User$matchesAsP1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesAsP2<T extends User$matchesAsP2Args<ExtArgs> = {}>(args?: Subset<T, User$matchesAsP2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends User$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    weeklyStats<T extends User$weeklyStatsArgs<ExtArgs> = {}>(args?: Subset<T, User$weeklyStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyCompletions<T extends User$dailyCompletionsArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyCompletionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyQuizCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tournamentEntries<T extends User$tournamentEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$tournamentEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    generalProgress<T extends User$generalProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$generalProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneralProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly avatarFrameId: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly level: FieldRef<"User", 'Int'>
    readonly xp: FieldRef<"User", 'Int'>
    readonly coins: FieldRef<"User", 'Int'>
    readonly rankedPoints: FieldRef<"User", 'Int'>
    readonly totalWins: FieldRef<"User", 'Int'>
    readonly totalMatches: FieldRef<"User", 'Int'>
    readonly longestStreak: FieldRef<"User", 'Int'>
    readonly loginStreak: FieldRef<"User", 'Int'>
    readonly lastLoginDate: FieldRef<"User", 'DateTime'>
    readonly lastSpinDate: FieldRef<"User", 'DateTime'>
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
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.matchesAsP1
   */
  export type User$matchesAsP1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.matchesAsP2
   */
  export type User$matchesAsP2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.purchases
   */
  export type User$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * User.weeklyStats
   */
  export type User$weeklyStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyStats
     */
    select?: WeeklyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyStats
     */
    omit?: WeeklyStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyStatsInclude<ExtArgs> | null
    where?: WeeklyStatsWhereInput
    orderBy?: WeeklyStatsOrderByWithRelationInput | WeeklyStatsOrderByWithRelationInput[]
    cursor?: WeeklyStatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklyStatsScalarFieldEnum | WeeklyStatsScalarFieldEnum[]
  }

  /**
   * User.dailyCompletions
   */
  export type User$dailyCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyQuizCompletion
     */
    select?: DailyQuizCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyQuizCompletion
     */
    omit?: DailyQuizCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyQuizCompletionInclude<ExtArgs> | null
    where?: DailyQuizCompletionWhereInput
    orderBy?: DailyQuizCompletionOrderByWithRelationInput | DailyQuizCompletionOrderByWithRelationInput[]
    cursor?: DailyQuizCompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyQuizCompletionScalarFieldEnum | DailyQuizCompletionScalarFieldEnum[]
  }

  /**
   * User.tournamentEntries
   */
  export type User$tournamentEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentEntry
     */
    select?: TournamentEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentEntry
     */
    omit?: TournamentEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEntryInclude<ExtArgs> | null
    where?: TournamentEntryWhereInput
    orderBy?: TournamentEntryOrderByWithRelationInput | TournamentEntryOrderByWithRelationInput[]
    cursor?: TournamentEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentEntryScalarFieldEnum | TournamentEntryScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.generalProgress
   */
  export type User$generalProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralProgress
     */
    select?: GeneralProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralProgress
     */
    omit?: GeneralProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralProgressInclude<ExtArgs> | null
    where?: GeneralProgressWhereInput
    orderBy?: GeneralProgressOrderByWithRelationInput | GeneralProgressOrderByWithRelationInput[]
    cursor?: GeneralProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneralProgressScalarFieldEnum | GeneralProgressScalarFieldEnum[]
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
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * @param {AccountFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const account = await prisma.account.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AccountFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Account.
     * @param {AccountAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const account = await prisma.account.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AccountAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account findRaw
   */
  export type AccountFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Account aggregateRaw
   */
  export type AccountAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * @param {SessionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const session = await prisma.session.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SessionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Session.
     * @param {SessionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const session = await prisma.session.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SessionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session findRaw
   */
  export type SessionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Session aggregateRaw
   */
  export type SessionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    id: number
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    id: string
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>



  export type VerificationTokenSelectScalar = {
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * @param {VerificationTokenFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const verificationToken = await prisma.verificationToken.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VerificationTokenFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a VerificationToken.
     * @param {VerificationTokenAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const verificationToken = await prisma.verificationToken.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VerificationTokenAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly id: FieldRef<"VerificationToken", 'String'>
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken findRaw
   */
  export type VerificationTokenFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * VerificationToken aggregateRaw
   */
  export type VerificationTokenAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    answerIndex: number | null
  }

  export type QuestionSumAggregateOutputType = {
    answerIndex: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    text: string | null
    answerIndex: number | null
    category: string | null
    difficulty: string | null
    explanation: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    answerIndex: number | null
    category: string | null
    difficulty: string | null
    explanation: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    text: number
    options: number
    answerIndex: number
    category: number
    difficulty: number
    explanation: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    answerIndex?: true
  }

  export type QuestionSumAggregateInputType = {
    answerIndex?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    text?: true
    answerIndex?: true
    category?: true
    difficulty?: true
    explanation?: true
    isActive?: true
    createdAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    text?: true
    answerIndex?: true
    category?: true
    difficulty?: true
    explanation?: true
    isActive?: true
    createdAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    text?: true
    options?: true
    answerIndex?: true
    category?: true
    difficulty?: true
    explanation?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    text: string
    options: string[]
    answerIndex: number
    category: string
    difficulty: string
    explanation: string | null
    isActive: boolean
    createdAt: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    options?: boolean
    answerIndex?: boolean
    category?: boolean
    difficulty?: boolean
    explanation?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["question"]>



  export type QuestionSelectScalar = {
    id?: boolean
    text?: boolean
    options?: boolean
    answerIndex?: boolean
    category?: boolean
    difficulty?: boolean
    explanation?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "options" | "answerIndex" | "category" | "difficulty" | "explanation" | "isActive" | "createdAt", ExtArgs["result"]["question"]>

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      options: string[]
      answerIndex: number
      category: string
      difficulty: string
      explanation: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * @param {QuestionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const question = await prisma.question.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: QuestionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Question.
     * @param {QuestionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const question = await prisma.question.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: QuestionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly text: FieldRef<"Question", 'String'>
    readonly options: FieldRef<"Question", 'String[]'>
    readonly answerIndex: FieldRef<"Question", 'Int'>
    readonly category: FieldRef<"Question", 'String'>
    readonly difficulty: FieldRef<"Question", 'String'>
    readonly explanation: FieldRef<"Question", 'String'>
    readonly isActive: FieldRef<"Question", 'Boolean'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question findRaw
   */
  export type QuestionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Question aggregateRaw
   */
  export type QuestionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchAvgAggregateOutputType = {
    player1Score: number | null
    player2Score: number | null
    coinStake: number | null
    roundNumber: number | null
  }

  export type MatchSumAggregateOutputType = {
    player1Score: number | null
    player2Score: number | null
    coinStake: number | null
    roundNumber: number | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    type: string | null
    status: string | null
    player1Id: string | null
    player2Id: string | null
    winnerId: string | null
    player1Score: number | null
    player2Score: number | null
    player1Finished: boolean | null
    player2Finished: boolean | null
    coinStake: number | null
    tournamentId: string | null
    roundNumber: number | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    type: string | null
    status: string | null
    player1Id: string | null
    player2Id: string | null
    winnerId: string | null
    player1Score: number | null
    player2Score: number | null
    player1Finished: boolean | null
    player2Finished: boolean | null
    coinStake: number | null
    tournamentId: string | null
    roundNumber: number | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    type: number
    status: number
    player1Id: number
    player2Id: number
    winnerId: number
    player1Score: number
    player2Score: number
    player1Finished: number
    player2Finished: number
    coinStake: number
    questionIds: number
    tournamentId: number
    roundNumber: number
    startedAt: number
    completedAt: number
    createdAt: number
    _all: number
  }


  export type MatchAvgAggregateInputType = {
    player1Score?: true
    player2Score?: true
    coinStake?: true
    roundNumber?: true
  }

  export type MatchSumAggregateInputType = {
    player1Score?: true
    player2Score?: true
    coinStake?: true
    roundNumber?: true
  }

  export type MatchMinAggregateInputType = {
    id?: true
    type?: true
    status?: true
    player1Id?: true
    player2Id?: true
    winnerId?: true
    player1Score?: true
    player2Score?: true
    player1Finished?: true
    player2Finished?: true
    coinStake?: true
    tournamentId?: true
    roundNumber?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    type?: true
    status?: true
    player1Id?: true
    player2Id?: true
    winnerId?: true
    player1Score?: true
    player2Score?: true
    player1Finished?: true
    player2Finished?: true
    coinStake?: true
    tournamentId?: true
    roundNumber?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    type?: true
    status?: true
    player1Id?: true
    player2Id?: true
    winnerId?: true
    player1Score?: true
    player2Score?: true
    player1Finished?: true
    player2Finished?: true
    coinStake?: true
    questionIds?: true
    tournamentId?: true
    roundNumber?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _avg?: MatchAvgAggregateInputType
    _sum?: MatchSumAggregateInputType
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    type: string
    status: string
    player1Id: string
    player2Id: string | null
    winnerId: string | null
    player1Score: number
    player2Score: number
    player1Finished: boolean
    player2Finished: boolean
    coinStake: number
    questionIds: string[]
    tournamentId: string | null
    roundNumber: number | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    player1Id?: boolean
    player2Id?: boolean
    winnerId?: boolean
    player1Score?: boolean
    player2Score?: boolean
    player1Finished?: boolean
    player2Finished?: boolean
    coinStake?: boolean
    questionIds?: boolean
    tournamentId?: boolean
    roundNumber?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | Match$player2Args<ExtArgs>
    tournament?: boolean | Match$tournamentArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>



  export type MatchSelectScalar = {
    id?: boolean
    type?: boolean
    status?: boolean
    player1Id?: boolean
    player2Id?: boolean
    winnerId?: boolean
    player1Score?: boolean
    player2Score?: boolean
    player1Finished?: boolean
    player2Finished?: boolean
    coinStake?: boolean
    questionIds?: boolean
    tournamentId?: boolean
    roundNumber?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "status" | "player1Id" | "player2Id" | "winnerId" | "player1Score" | "player2Score" | "player1Finished" | "player2Finished" | "coinStake" | "questionIds" | "tournamentId" | "roundNumber" | "startedAt" | "completedAt" | "createdAt", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | Match$player2Args<ExtArgs>
    tournament?: boolean | Match$tournamentArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      player1: Prisma.$UserPayload<ExtArgs>
      player2: Prisma.$UserPayload<ExtArgs> | null
      tournament: Prisma.$TournamentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      status: string
      player1Id: string
      player2Id: string | null
      winnerId: string | null
      player1Score: number
      player2Score: number
      player1Finished: boolean
      player2Finished: boolean
      coinStake: number
      questionIds: string[]
      tournamentId: string | null
      roundNumber: number | null
      startedAt: Date | null
      completedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * @param {MatchFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const match = await prisma.match.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MatchFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Match.
     * @param {MatchAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const match = await prisma.match.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MatchAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
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
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player2<T extends Match$player2Args<ExtArgs> = {}>(args?: Subset<T, Match$player2Args<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tournament<T extends Match$tournamentArgs<ExtArgs> = {}>(args?: Subset<T, Match$tournamentArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly type: FieldRef<"Match", 'String'>
    readonly status: FieldRef<"Match", 'String'>
    readonly player1Id: FieldRef<"Match", 'String'>
    readonly player2Id: FieldRef<"Match", 'String'>
    readonly winnerId: FieldRef<"Match", 'String'>
    readonly player1Score: FieldRef<"Match", 'Int'>
    readonly player2Score: FieldRef<"Match", 'Int'>
    readonly player1Finished: FieldRef<"Match", 'Boolean'>
    readonly player2Finished: FieldRef<"Match", 'Boolean'>
    readonly coinStake: FieldRef<"Match", 'Int'>
    readonly questionIds: FieldRef<"Match", 'String[]'>
    readonly tournamentId: FieldRef<"Match", 'String'>
    readonly roundNumber: FieldRef<"Match", 'Int'>
    readonly startedAt: FieldRef<"Match", 'DateTime'>
    readonly completedAt: FieldRef<"Match", 'DateTime'>
    readonly createdAt: FieldRef<"Match", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match findRaw
   */
  export type MatchFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Match aggregateRaw
   */
  export type MatchAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Match.player2
   */
  export type Match$player2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Match.tournament
   */
  export type Match$tournamentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    where?: TournamentWhereInput
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Model Tournament
   */

  export type AggregateTournament = {
    _count: TournamentCountAggregateOutputType | null
    _avg: TournamentAvgAggregateOutputType | null
    _sum: TournamentSumAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  export type TournamentAvgAggregateOutputType = {
    entryFee: number | null
    prizePool: number | null
    maxPlayers: number | null
  }

  export type TournamentSumAggregateOutputType = {
    entryFee: number | null
    prizePool: number | null
    maxPlayers: number | null
  }

  export type TournamentMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    entryFee: number | null
    prizePool: number | null
    maxPlayers: number | null
    status: string | null
    winnerId: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type TournamentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    entryFee: number | null
    prizePool: number | null
    maxPlayers: number | null
    status: string | null
    winnerId: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type TournamentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    entryFee: number
    prizePool: number
    maxPlayers: number
    status: number
    bracket: number
    winnerId: number
    startedAt: number
    completedAt: number
    createdAt: number
    _all: number
  }


  export type TournamentAvgAggregateInputType = {
    entryFee?: true
    prizePool?: true
    maxPlayers?: true
  }

  export type TournamentSumAggregateInputType = {
    entryFee?: true
    prizePool?: true
    maxPlayers?: true
  }

  export type TournamentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    entryFee?: true
    prizePool?: true
    maxPlayers?: true
    status?: true
    winnerId?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type TournamentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    entryFee?: true
    prizePool?: true
    maxPlayers?: true
    status?: true
    winnerId?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type TournamentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    entryFee?: true
    prizePool?: true
    maxPlayers?: true
    status?: true
    bracket?: true
    winnerId?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    _all?: true
  }

  export type TournamentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournament to aggregate.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tournaments
    **/
    _count?: true | TournamentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TournamentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TournamentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentMaxAggregateInputType
  }

  export type GetTournamentAggregateType<T extends TournamentAggregateArgs> = {
        [P in keyof T & keyof AggregateTournament]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournament[P]>
      : GetScalarType<T[P], AggregateTournament[P]>
  }




  export type TournamentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithAggregationInput | TournamentOrderByWithAggregationInput[]
    by: TournamentScalarFieldEnum[] | TournamentScalarFieldEnum
    having?: TournamentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentCountAggregateInputType | true
    _avg?: TournamentAvgAggregateInputType
    _sum?: TournamentSumAggregateInputType
    _min?: TournamentMinAggregateInputType
    _max?: TournamentMaxAggregateInputType
  }

  export type TournamentGroupByOutputType = {
    id: string
    name: string
    description: string | null
    entryFee: number
    prizePool: number
    maxPlayers: number
    status: string
    bracket: JsonValue | null
    winnerId: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    _count: TournamentCountAggregateOutputType | null
    _avg: TournamentAvgAggregateOutputType | null
    _sum: TournamentSumAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  type GetTournamentGroupByPayload<T extends TournamentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentGroupByOutputType[P]>
        }
      >
    >


  export type TournamentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    entryFee?: boolean
    prizePool?: boolean
    maxPlayers?: boolean
    status?: boolean
    bracket?: boolean
    winnerId?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    entries?: boolean | Tournament$entriesArgs<ExtArgs>
    matches?: boolean | Tournament$matchesArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournament"]>



  export type TournamentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    entryFee?: boolean
    prizePool?: boolean
    maxPlayers?: boolean
    status?: boolean
    bracket?: boolean
    winnerId?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }

  export type TournamentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "entryFee" | "prizePool" | "maxPlayers" | "status" | "bracket" | "winnerId" | "startedAt" | "completedAt" | "createdAt", ExtArgs["result"]["tournament"]>
  export type TournamentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | Tournament$entriesArgs<ExtArgs>
    matches?: boolean | Tournament$matchesArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TournamentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tournament"
    objects: {
      entries: Prisma.$TournamentEntryPayload<ExtArgs>[]
      matches: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      entryFee: number
      prizePool: number
      maxPlayers: number
      status: string
      bracket: Prisma.JsonValue | null
      winnerId: string | null
      startedAt: Date | null
      completedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["tournament"]>
    composites: {}
  }

  type TournamentGetPayload<S extends boolean | null | undefined | TournamentDefaultArgs> = $Result.GetResult<Prisma.$TournamentPayload, S>

  type TournamentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TournamentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TournamentCountAggregateInputType | true
    }

  export interface TournamentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tournament'], meta: { name: 'Tournament' } }
    /**
     * Find zero or one Tournament that matches the filter.
     * @param {TournamentFindUniqueArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentFindUniqueArgs>(args: SelectSubset<T, TournamentFindUniqueArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tournament that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentFindUniqueOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tournament that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentFindFirstArgs>(args?: SelectSubset<T, TournamentFindFirstArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tournament that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tournaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tournaments
     * const tournaments = await prisma.tournament.findMany()
     * 
     * // Get first 10 Tournaments
     * const tournaments = await prisma.tournament.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentWithIdOnly = await prisma.tournament.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TournamentFindManyArgs>(args?: SelectSubset<T, TournamentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tournament.
     * @param {TournamentCreateArgs} args - Arguments to create a Tournament.
     * @example
     * // Create one Tournament
     * const Tournament = await prisma.tournament.create({
     *   data: {
     *     // ... data to create a Tournament
     *   }
     * })
     * 
     */
    create<T extends TournamentCreateArgs>(args: SelectSubset<T, TournamentCreateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tournaments.
     * @param {TournamentCreateManyArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentCreateManyArgs>(args?: SelectSubset<T, TournamentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tournament.
     * @param {TournamentDeleteArgs} args - Arguments to delete one Tournament.
     * @example
     * // Delete one Tournament
     * const Tournament = await prisma.tournament.delete({
     *   where: {
     *     // ... filter to delete one Tournament
     *   }
     * })
     * 
     */
    delete<T extends TournamentDeleteArgs>(args: SelectSubset<T, TournamentDeleteArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tournament.
     * @param {TournamentUpdateArgs} args - Arguments to update one Tournament.
     * @example
     * // Update one Tournament
     * const tournament = await prisma.tournament.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentUpdateArgs>(args: SelectSubset<T, TournamentUpdateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tournaments.
     * @param {TournamentDeleteManyArgs} args - Arguments to filter Tournaments to delete.
     * @example
     * // Delete a few Tournaments
     * const { count } = await prisma.tournament.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentDeleteManyArgs>(args?: SelectSubset<T, TournamentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentUpdateManyArgs>(args: SelectSubset<T, TournamentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tournament.
     * @param {TournamentUpsertArgs} args - Arguments to update or create a Tournament.
     * @example
     * // Update or create a Tournament
     * const tournament = await prisma.tournament.upsert({
     *   create: {
     *     // ... data to create a Tournament
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tournament we want to update
     *   }
     * })
     */
    upsert<T extends TournamentUpsertArgs>(args: SelectSubset<T, TournamentUpsertArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tournaments that matches the filter.
     * @param {TournamentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tournament = await prisma.tournament.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TournamentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Tournament.
     * @param {TournamentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tournament = await prisma.tournament.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TournamentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentCountArgs} args - Arguments to filter Tournaments to count.
     * @example
     * // Count the number of Tournaments
     * const count = await prisma.tournament.count({
     *   where: {
     *     // ... the filter for the Tournaments we want to count
     *   }
     * })
    **/
    count<T extends TournamentCountArgs>(
      args?: Subset<T, TournamentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TournamentAggregateArgs>(args: Subset<T, TournamentAggregateArgs>): Prisma.PrismaPromise<GetTournamentAggregateType<T>>

    /**
     * Group by Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupByArgs} args - Group by arguments.
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
      T extends TournamentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentGroupByArgs['orderBy'] }
        : { orderBy?: TournamentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TournamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tournament model
   */
  readonly fields: TournamentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tournament.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entries<T extends Tournament$entriesArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches<T extends Tournament$matchesArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tournament model
   */
  interface TournamentFieldRefs {
    readonly id: FieldRef<"Tournament", 'String'>
    readonly name: FieldRef<"Tournament", 'String'>
    readonly description: FieldRef<"Tournament", 'String'>
    readonly entryFee: FieldRef<"Tournament", 'Int'>
    readonly prizePool: FieldRef<"Tournament", 'Int'>
    readonly maxPlayers: FieldRef<"Tournament", 'Int'>
    readonly status: FieldRef<"Tournament", 'String'>
    readonly bracket: FieldRef<"Tournament", 'Json'>
    readonly winnerId: FieldRef<"Tournament", 'String'>
    readonly startedAt: FieldRef<"Tournament", 'DateTime'>
    readonly completedAt: FieldRef<"Tournament", 'DateTime'>
    readonly createdAt: FieldRef<"Tournament", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tournament findUnique
   */
  export type TournamentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findUniqueOrThrow
   */
  export type TournamentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findFirst
   */
  export type TournamentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findFirstOrThrow
   */
  export type TournamentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findMany
   */
  export type TournamentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournaments to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament create
   */
  export type TournamentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to create a Tournament.
     */
    data: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
  }

  /**
   * Tournament createMany
   */
  export type TournamentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
  }

  /**
   * Tournament update
   */
  export type TournamentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to update a Tournament.
     */
    data: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
    /**
     * Choose, which Tournament to update.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament updateMany
   */
  export type TournamentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number
  }

  /**
   * Tournament upsert
   */
  export type TournamentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The filter to search for the Tournament to update in case it exists.
     */
    where: TournamentWhereUniqueInput
    /**
     * In case the Tournament found by the `where` argument doesn't exist, create a new Tournament with this data.
     */
    create: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
    /**
     * In case the Tournament was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
  }

  /**
   * Tournament delete
   */
  export type TournamentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter which Tournament to delete.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament deleteMany
   */
  export type TournamentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournaments to delete
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to delete.
     */
    limit?: number
  }

  /**
   * Tournament findRaw
   */
  export type TournamentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Tournament aggregateRaw
   */
  export type TournamentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Tournament.entries
   */
  export type Tournament$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentEntry
     */
    select?: TournamentEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentEntry
     */
    omit?: TournamentEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEntryInclude<ExtArgs> | null
    where?: TournamentEntryWhereInput
    orderBy?: TournamentEntryOrderByWithRelationInput | TournamentEntryOrderByWithRelationInput[]
    cursor?: TournamentEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentEntryScalarFieldEnum | TournamentEntryScalarFieldEnum[]
  }

  /**
   * Tournament.matches
   */
  export type Tournament$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Tournament without action
   */
  export type TournamentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
  }


  /**
   * Model TournamentEntry
   */

  export type AggregateTournamentEntry = {
    _count: TournamentEntryCountAggregateOutputType | null
    _avg: TournamentEntryAvgAggregateOutputType | null
    _sum: TournamentEntrySumAggregateOutputType | null
    _min: TournamentEntryMinAggregateOutputType | null
    _max: TournamentEntryMaxAggregateOutputType | null
  }

  export type TournamentEntryAvgAggregateOutputType = {
    placement: number | null
  }

  export type TournamentEntrySumAggregateOutputType = {
    placement: number | null
  }

  export type TournamentEntryMinAggregateOutputType = {
    id: string | null
    tournamentId: string | null
    userId: string | null
    joinedAt: Date | null
    eliminated: boolean | null
    placement: number | null
  }

  export type TournamentEntryMaxAggregateOutputType = {
    id: string | null
    tournamentId: string | null
    userId: string | null
    joinedAt: Date | null
    eliminated: boolean | null
    placement: number | null
  }

  export type TournamentEntryCountAggregateOutputType = {
    id: number
    tournamentId: number
    userId: number
    joinedAt: number
    eliminated: number
    placement: number
    _all: number
  }


  export type TournamentEntryAvgAggregateInputType = {
    placement?: true
  }

  export type TournamentEntrySumAggregateInputType = {
    placement?: true
  }

  export type TournamentEntryMinAggregateInputType = {
    id?: true
    tournamentId?: true
    userId?: true
    joinedAt?: true
    eliminated?: true
    placement?: true
  }

  export type TournamentEntryMaxAggregateInputType = {
    id?: true
    tournamentId?: true
    userId?: true
    joinedAt?: true
    eliminated?: true
    placement?: true
  }

  export type TournamentEntryCountAggregateInputType = {
    id?: true
    tournamentId?: true
    userId?: true
    joinedAt?: true
    eliminated?: true
    placement?: true
    _all?: true
  }

  export type TournamentEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentEntry to aggregate.
     */
    where?: TournamentEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentEntries to fetch.
     */
    orderBy?: TournamentEntryOrderByWithRelationInput | TournamentEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TournamentEntries
    **/
    _count?: true | TournamentEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TournamentEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TournamentEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentEntryMaxAggregateInputType
  }

  export type GetTournamentEntryAggregateType<T extends TournamentEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateTournamentEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournamentEntry[P]>
      : GetScalarType<T[P], AggregateTournamentEntry[P]>
  }




  export type TournamentEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentEntryWhereInput
    orderBy?: TournamentEntryOrderByWithAggregationInput | TournamentEntryOrderByWithAggregationInput[]
    by: TournamentEntryScalarFieldEnum[] | TournamentEntryScalarFieldEnum
    having?: TournamentEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentEntryCountAggregateInputType | true
    _avg?: TournamentEntryAvgAggregateInputType
    _sum?: TournamentEntrySumAggregateInputType
    _min?: TournamentEntryMinAggregateInputType
    _max?: TournamentEntryMaxAggregateInputType
  }

  export type TournamentEntryGroupByOutputType = {
    id: string
    tournamentId: string
    userId: string
    joinedAt: Date
    eliminated: boolean
    placement: number | null
    _count: TournamentEntryCountAggregateOutputType | null
    _avg: TournamentEntryAvgAggregateOutputType | null
    _sum: TournamentEntrySumAggregateOutputType | null
    _min: TournamentEntryMinAggregateOutputType | null
    _max: TournamentEntryMaxAggregateOutputType | null
  }

  type GetTournamentEntryGroupByPayload<T extends TournamentEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentEntryGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentEntryGroupByOutputType[P]>
        }
      >
    >


  export type TournamentEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    userId?: boolean
    joinedAt?: boolean
    eliminated?: boolean
    placement?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentEntry"]>



  export type TournamentEntrySelectScalar = {
    id?: boolean
    tournamentId?: boolean
    userId?: boolean
    joinedAt?: boolean
    eliminated?: boolean
    placement?: boolean
  }

  export type TournamentEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tournamentId" | "userId" | "joinedAt" | "eliminated" | "placement", ExtArgs["result"]["tournamentEntry"]>
  export type TournamentEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TournamentEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TournamentEntry"
    objects: {
      tournament: Prisma.$TournamentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tournamentId: string
      userId: string
      joinedAt: Date
      eliminated: boolean
      placement: number | null
    }, ExtArgs["result"]["tournamentEntry"]>
    composites: {}
  }

  type TournamentEntryGetPayload<S extends boolean | null | undefined | TournamentEntryDefaultArgs> = $Result.GetResult<Prisma.$TournamentEntryPayload, S>

  type TournamentEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TournamentEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TournamentEntryCountAggregateInputType | true
    }

  export interface TournamentEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TournamentEntry'], meta: { name: 'TournamentEntry' } }
    /**
     * Find zero or one TournamentEntry that matches the filter.
     * @param {TournamentEntryFindUniqueArgs} args - Arguments to find a TournamentEntry
     * @example
     * // Get one TournamentEntry
     * const tournamentEntry = await prisma.tournamentEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentEntryFindUniqueArgs>(args: SelectSubset<T, TournamentEntryFindUniqueArgs<ExtArgs>>): Prisma__TournamentEntryClient<$Result.GetResult<Prisma.$TournamentEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TournamentEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentEntryFindUniqueOrThrowArgs} args - Arguments to find a TournamentEntry
     * @example
     * // Get one TournamentEntry
     * const tournamentEntry = await prisma.tournamentEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentEntryClient<$Result.GetResult<Prisma.$TournamentEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TournamentEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentEntryFindFirstArgs} args - Arguments to find a TournamentEntry
     * @example
     * // Get one TournamentEntry
     * const tournamentEntry = await prisma.tournamentEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentEntryFindFirstArgs>(args?: SelectSubset<T, TournamentEntryFindFirstArgs<ExtArgs>>): Prisma__TournamentEntryClient<$Result.GetResult<Prisma.$TournamentEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TournamentEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentEntryFindFirstOrThrowArgs} args - Arguments to find a TournamentEntry
     * @example
     * // Get one TournamentEntry
     * const tournamentEntry = await prisma.tournamentEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentEntryClient<$Result.GetResult<Prisma.$TournamentEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TournamentEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TournamentEntries
     * const tournamentEntries = await prisma.tournamentEntry.findMany()
     * 
     * // Get first 10 TournamentEntries
     * const tournamentEntries = await prisma.tournamentEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentEntryWithIdOnly = await prisma.tournamentEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TournamentEntryFindManyArgs>(args?: SelectSubset<T, TournamentEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TournamentEntry.
     * @param {TournamentEntryCreateArgs} args - Arguments to create a TournamentEntry.
     * @example
     * // Create one TournamentEntry
     * const TournamentEntry = await prisma.tournamentEntry.create({
     *   data: {
     *     // ... data to create a TournamentEntry
     *   }
     * })
     * 
     */
    create<T extends TournamentEntryCreateArgs>(args: SelectSubset<T, TournamentEntryCreateArgs<ExtArgs>>): Prisma__TournamentEntryClient<$Result.GetResult<Prisma.$TournamentEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TournamentEntries.
     * @param {TournamentEntryCreateManyArgs} args - Arguments to create many TournamentEntries.
     * @example
     * // Create many TournamentEntries
     * const tournamentEntry = await prisma.tournamentEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentEntryCreateManyArgs>(args?: SelectSubset<T, TournamentEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TournamentEntry.
     * @param {TournamentEntryDeleteArgs} args - Arguments to delete one TournamentEntry.
     * @example
     * // Delete one TournamentEntry
     * const TournamentEntry = await prisma.tournamentEntry.delete({
     *   where: {
     *     // ... filter to delete one TournamentEntry
     *   }
     * })
     * 
     */
    delete<T extends TournamentEntryDeleteArgs>(args: SelectSubset<T, TournamentEntryDeleteArgs<ExtArgs>>): Prisma__TournamentEntryClient<$Result.GetResult<Prisma.$TournamentEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TournamentEntry.
     * @param {TournamentEntryUpdateArgs} args - Arguments to update one TournamentEntry.
     * @example
     * // Update one TournamentEntry
     * const tournamentEntry = await prisma.tournamentEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentEntryUpdateArgs>(args: SelectSubset<T, TournamentEntryUpdateArgs<ExtArgs>>): Prisma__TournamentEntryClient<$Result.GetResult<Prisma.$TournamentEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TournamentEntries.
     * @param {TournamentEntryDeleteManyArgs} args - Arguments to filter TournamentEntries to delete.
     * @example
     * // Delete a few TournamentEntries
     * const { count } = await prisma.tournamentEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentEntryDeleteManyArgs>(args?: SelectSubset<T, TournamentEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TournamentEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TournamentEntries
     * const tournamentEntry = await prisma.tournamentEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentEntryUpdateManyArgs>(args: SelectSubset<T, TournamentEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TournamentEntry.
     * @param {TournamentEntryUpsertArgs} args - Arguments to update or create a TournamentEntry.
     * @example
     * // Update or create a TournamentEntry
     * const tournamentEntry = await prisma.tournamentEntry.upsert({
     *   create: {
     *     // ... data to create a TournamentEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TournamentEntry we want to update
     *   }
     * })
     */
    upsert<T extends TournamentEntryUpsertArgs>(args: SelectSubset<T, TournamentEntryUpsertArgs<ExtArgs>>): Prisma__TournamentEntryClient<$Result.GetResult<Prisma.$TournamentEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TournamentEntries that matches the filter.
     * @param {TournamentEntryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tournamentEntry = await prisma.tournamentEntry.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TournamentEntryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TournamentEntry.
     * @param {TournamentEntryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tournamentEntry = await prisma.tournamentEntry.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TournamentEntryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TournamentEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentEntryCountArgs} args - Arguments to filter TournamentEntries to count.
     * @example
     * // Count the number of TournamentEntries
     * const count = await prisma.tournamentEntry.count({
     *   where: {
     *     // ... the filter for the TournamentEntries we want to count
     *   }
     * })
    **/
    count<T extends TournamentEntryCountArgs>(
      args?: Subset<T, TournamentEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TournamentEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TournamentEntryAggregateArgs>(args: Subset<T, TournamentEntryAggregateArgs>): Prisma.PrismaPromise<GetTournamentEntryAggregateType<T>>

    /**
     * Group by TournamentEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentEntryGroupByArgs} args - Group by arguments.
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
      T extends TournamentEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentEntryGroupByArgs['orderBy'] }
        : { orderBy?: TournamentEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TournamentEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TournamentEntry model
   */
  readonly fields: TournamentEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TournamentEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentDefaultArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TournamentEntry model
   */
  interface TournamentEntryFieldRefs {
    readonly id: FieldRef<"TournamentEntry", 'String'>
    readonly tournamentId: FieldRef<"TournamentEntry", 'String'>
    readonly userId: FieldRef<"TournamentEntry", 'String'>
    readonly joinedAt: FieldRef<"TournamentEntry", 'DateTime'>
    readonly eliminated: FieldRef<"TournamentEntry", 'Boolean'>
    readonly placement: FieldRef<"TournamentEntry", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TournamentEntry findUnique
   */
  export type TournamentEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentEntry
     */
    select?: TournamentEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentEntry
     */
    omit?: TournamentEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEntryInclude<ExtArgs> | null
    /**
     * Filter, which TournamentEntry to fetch.
     */
    where: TournamentEntryWhereUniqueInput
  }

  /**
   * TournamentEntry findUniqueOrThrow
   */
  export type TournamentEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentEntry
     */
    select?: TournamentEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentEntry
     */
    omit?: TournamentEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEntryInclude<ExtArgs> | null
    /**
     * Filter, which TournamentEntry to fetch.
     */
    where: TournamentEntryWhereUniqueInput
  }

  /**
   * TournamentEntry findFirst
   */
  export type TournamentEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentEntry
     */
    select?: TournamentEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentEntry
     */
    omit?: TournamentEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEntryInclude<ExtArgs> | null
    /**
     * Filter, which TournamentEntry to fetch.
     */
    where?: TournamentEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentEntries to fetch.
     */
    orderBy?: TournamentEntryOrderByWithRelationInput | TournamentEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TournamentEntries.
     */
    cursor?: TournamentEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TournamentEntries.
     */
    distinct?: TournamentEntryScalarFieldEnum | TournamentEntryScalarFieldEnum[]
  }

  /**
   * TournamentEntry findFirstOrThrow
   */
  export type TournamentEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentEntry
     */
    select?: TournamentEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentEntry
     */
    omit?: TournamentEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEntryInclude<ExtArgs> | null
    /**
     * Filter, which TournamentEntry to fetch.
     */
    where?: TournamentEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentEntries to fetch.
     */
    orderBy?: TournamentEntryOrderByWithRelationInput | TournamentEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TournamentEntries.
     */
    cursor?: TournamentEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TournamentEntries.
     */
    distinct?: TournamentEntryScalarFieldEnum | TournamentEntryScalarFieldEnum[]
  }

  /**
   * TournamentEntry findMany
   */
  export type TournamentEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentEntry
     */
    select?: TournamentEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentEntry
     */
    omit?: TournamentEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEntryInclude<ExtArgs> | null
    /**
     * Filter, which TournamentEntries to fetch.
     */
    where?: TournamentEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentEntries to fetch.
     */
    orderBy?: TournamentEntryOrderByWithRelationInput | TournamentEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TournamentEntries.
     */
    cursor?: TournamentEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentEntries.
     */
    skip?: number
    distinct?: TournamentEntryScalarFieldEnum | TournamentEntryScalarFieldEnum[]
  }

  /**
   * TournamentEntry create
   */
  export type TournamentEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentEntry
     */
    select?: TournamentEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentEntry
     */
    omit?: TournamentEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a TournamentEntry.
     */
    data: XOR<TournamentEntryCreateInput, TournamentEntryUncheckedCreateInput>
  }

  /**
   * TournamentEntry createMany
   */
  export type TournamentEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TournamentEntries.
     */
    data: TournamentEntryCreateManyInput | TournamentEntryCreateManyInput[]
  }

  /**
   * TournamentEntry update
   */
  export type TournamentEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentEntry
     */
    select?: TournamentEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentEntry
     */
    omit?: TournamentEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a TournamentEntry.
     */
    data: XOR<TournamentEntryUpdateInput, TournamentEntryUncheckedUpdateInput>
    /**
     * Choose, which TournamentEntry to update.
     */
    where: TournamentEntryWhereUniqueInput
  }

  /**
   * TournamentEntry updateMany
   */
  export type TournamentEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TournamentEntries.
     */
    data: XOR<TournamentEntryUpdateManyMutationInput, TournamentEntryUncheckedUpdateManyInput>
    /**
     * Filter which TournamentEntries to update
     */
    where?: TournamentEntryWhereInput
    /**
     * Limit how many TournamentEntries to update.
     */
    limit?: number
  }

  /**
   * TournamentEntry upsert
   */
  export type TournamentEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentEntry
     */
    select?: TournamentEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentEntry
     */
    omit?: TournamentEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the TournamentEntry to update in case it exists.
     */
    where: TournamentEntryWhereUniqueInput
    /**
     * In case the TournamentEntry found by the `where` argument doesn't exist, create a new TournamentEntry with this data.
     */
    create: XOR<TournamentEntryCreateInput, TournamentEntryUncheckedCreateInput>
    /**
     * In case the TournamentEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentEntryUpdateInput, TournamentEntryUncheckedUpdateInput>
  }

  /**
   * TournamentEntry delete
   */
  export type TournamentEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentEntry
     */
    select?: TournamentEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentEntry
     */
    omit?: TournamentEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEntryInclude<ExtArgs> | null
    /**
     * Filter which TournamentEntry to delete.
     */
    where: TournamentEntryWhereUniqueInput
  }

  /**
   * TournamentEntry deleteMany
   */
  export type TournamentEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentEntries to delete
     */
    where?: TournamentEntryWhereInput
    /**
     * Limit how many TournamentEntries to delete.
     */
    limit?: number
  }

  /**
   * TournamentEntry findRaw
   */
  export type TournamentEntryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TournamentEntry aggregateRaw
   */
  export type TournamentEntryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TournamentEntry without action
   */
  export type TournamentEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentEntry
     */
    select?: TournamentEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentEntry
     */
    omit?: TournamentEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentEntryInclude<ExtArgs> | null
  }


  /**
   * Model ShopItem
   */

  export type AggregateShopItem = {
    _count: ShopItemCountAggregateOutputType | null
    _avg: ShopItemAvgAggregateOutputType | null
    _sum: ShopItemSumAggregateOutputType | null
    _min: ShopItemMinAggregateOutputType | null
    _max: ShopItemMaxAggregateOutputType | null
  }

  export type ShopItemAvgAggregateOutputType = {
    cost: number | null
  }

  export type ShopItemSumAggregateOutputType = {
    cost: number | null
  }

  export type ShopItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    type: string | null
    imageUrl: string | null
    cost: number | null
    rarity: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ShopItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    type: string | null
    imageUrl: string | null
    cost: number | null
    rarity: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ShopItemCountAggregateOutputType = {
    id: number
    name: number
    description: number
    type: number
    imageUrl: number
    cost: number
    rarity: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type ShopItemAvgAggregateInputType = {
    cost?: true
  }

  export type ShopItemSumAggregateInputType = {
    cost?: true
  }

  export type ShopItemMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    imageUrl?: true
    cost?: true
    rarity?: true
    isActive?: true
    createdAt?: true
  }

  export type ShopItemMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    imageUrl?: true
    cost?: true
    rarity?: true
    isActive?: true
    createdAt?: true
  }

  export type ShopItemCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    imageUrl?: true
    cost?: true
    rarity?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type ShopItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopItem to aggregate.
     */
    where?: ShopItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopItems to fetch.
     */
    orderBy?: ShopItemOrderByWithRelationInput | ShopItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopItems
    **/
    _count?: true | ShopItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopItemMaxAggregateInputType
  }

  export type GetShopItemAggregateType<T extends ShopItemAggregateArgs> = {
        [P in keyof T & keyof AggregateShopItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopItem[P]>
      : GetScalarType<T[P], AggregateShopItem[P]>
  }




  export type ShopItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopItemWhereInput
    orderBy?: ShopItemOrderByWithAggregationInput | ShopItemOrderByWithAggregationInput[]
    by: ShopItemScalarFieldEnum[] | ShopItemScalarFieldEnum
    having?: ShopItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopItemCountAggregateInputType | true
    _avg?: ShopItemAvgAggregateInputType
    _sum?: ShopItemSumAggregateInputType
    _min?: ShopItemMinAggregateInputType
    _max?: ShopItemMaxAggregateInputType
  }

  export type ShopItemGroupByOutputType = {
    id: string
    name: string
    description: string | null
    type: string
    imageUrl: string | null
    cost: number
    rarity: string
    isActive: boolean
    createdAt: Date
    _count: ShopItemCountAggregateOutputType | null
    _avg: ShopItemAvgAggregateOutputType | null
    _sum: ShopItemSumAggregateOutputType | null
    _min: ShopItemMinAggregateOutputType | null
    _max: ShopItemMaxAggregateOutputType | null
  }

  type GetShopItemGroupByPayload<T extends ShopItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopItemGroupByOutputType[P]>
            : GetScalarType<T[P], ShopItemGroupByOutputType[P]>
        }
      >
    >


  export type ShopItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    imageUrl?: boolean
    cost?: boolean
    rarity?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["shopItem"]>



  export type ShopItemSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    imageUrl?: boolean
    cost?: boolean
    rarity?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type ShopItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "type" | "imageUrl" | "cost" | "rarity" | "isActive" | "createdAt", ExtArgs["result"]["shopItem"]>

  export type $ShopItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      type: string
      imageUrl: string | null
      cost: number
      rarity: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["shopItem"]>
    composites: {}
  }

  type ShopItemGetPayload<S extends boolean | null | undefined | ShopItemDefaultArgs> = $Result.GetResult<Prisma.$ShopItemPayload, S>

  type ShopItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopItemCountAggregateInputType | true
    }

  export interface ShopItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopItem'], meta: { name: 'ShopItem' } }
    /**
     * Find zero or one ShopItem that matches the filter.
     * @param {ShopItemFindUniqueArgs} args - Arguments to find a ShopItem
     * @example
     * // Get one ShopItem
     * const shopItem = await prisma.shopItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopItemFindUniqueArgs>(args: SelectSubset<T, ShopItemFindUniqueArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShopItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopItemFindUniqueOrThrowArgs} args - Arguments to find a ShopItem
     * @example
     * // Get one ShopItem
     * const shopItem = await prisma.shopItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopItemFindFirstArgs} args - Arguments to find a ShopItem
     * @example
     * // Get one ShopItem
     * const shopItem = await prisma.shopItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopItemFindFirstArgs>(args?: SelectSubset<T, ShopItemFindFirstArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopItemFindFirstOrThrowArgs} args - Arguments to find a ShopItem
     * @example
     * // Get one ShopItem
     * const shopItem = await prisma.shopItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopItems
     * const shopItems = await prisma.shopItem.findMany()
     * 
     * // Get first 10 ShopItems
     * const shopItems = await prisma.shopItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopItemWithIdOnly = await prisma.shopItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopItemFindManyArgs>(args?: SelectSubset<T, ShopItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShopItem.
     * @param {ShopItemCreateArgs} args - Arguments to create a ShopItem.
     * @example
     * // Create one ShopItem
     * const ShopItem = await prisma.shopItem.create({
     *   data: {
     *     // ... data to create a ShopItem
     *   }
     * })
     * 
     */
    create<T extends ShopItemCreateArgs>(args: SelectSubset<T, ShopItemCreateArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShopItems.
     * @param {ShopItemCreateManyArgs} args - Arguments to create many ShopItems.
     * @example
     * // Create many ShopItems
     * const shopItem = await prisma.shopItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopItemCreateManyArgs>(args?: SelectSubset<T, ShopItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShopItem.
     * @param {ShopItemDeleteArgs} args - Arguments to delete one ShopItem.
     * @example
     * // Delete one ShopItem
     * const ShopItem = await prisma.shopItem.delete({
     *   where: {
     *     // ... filter to delete one ShopItem
     *   }
     * })
     * 
     */
    delete<T extends ShopItemDeleteArgs>(args: SelectSubset<T, ShopItemDeleteArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShopItem.
     * @param {ShopItemUpdateArgs} args - Arguments to update one ShopItem.
     * @example
     * // Update one ShopItem
     * const shopItem = await prisma.shopItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopItemUpdateArgs>(args: SelectSubset<T, ShopItemUpdateArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShopItems.
     * @param {ShopItemDeleteManyArgs} args - Arguments to filter ShopItems to delete.
     * @example
     * // Delete a few ShopItems
     * const { count } = await prisma.shopItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopItemDeleteManyArgs>(args?: SelectSubset<T, ShopItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopItems
     * const shopItem = await prisma.shopItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopItemUpdateManyArgs>(args: SelectSubset<T, ShopItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShopItem.
     * @param {ShopItemUpsertArgs} args - Arguments to update or create a ShopItem.
     * @example
     * // Update or create a ShopItem
     * const shopItem = await prisma.shopItem.upsert({
     *   create: {
     *     // ... data to create a ShopItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopItem we want to update
     *   }
     * })
     */
    upsert<T extends ShopItemUpsertArgs>(args: SelectSubset<T, ShopItemUpsertArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopItems that matches the filter.
     * @param {ShopItemFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const shopItem = await prisma.shopItem.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ShopItemFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ShopItem.
     * @param {ShopItemAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const shopItem = await prisma.shopItem.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ShopItemAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ShopItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopItemCountArgs} args - Arguments to filter ShopItems to count.
     * @example
     * // Count the number of ShopItems
     * const count = await prisma.shopItem.count({
     *   where: {
     *     // ... the filter for the ShopItems we want to count
     *   }
     * })
    **/
    count<T extends ShopItemCountArgs>(
      args?: Subset<T, ShopItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopItemAggregateArgs>(args: Subset<T, ShopItemAggregateArgs>): Prisma.PrismaPromise<GetShopItemAggregateType<T>>

    /**
     * Group by ShopItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopItemGroupByArgs} args - Group by arguments.
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
      T extends ShopItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopItemGroupByArgs['orderBy'] }
        : { orderBy?: ShopItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShopItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopItem model
   */
  readonly fields: ShopItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ShopItem model
   */
  interface ShopItemFieldRefs {
    readonly id: FieldRef<"ShopItem", 'String'>
    readonly name: FieldRef<"ShopItem", 'String'>
    readonly description: FieldRef<"ShopItem", 'String'>
    readonly type: FieldRef<"ShopItem", 'String'>
    readonly imageUrl: FieldRef<"ShopItem", 'String'>
    readonly cost: FieldRef<"ShopItem", 'Int'>
    readonly rarity: FieldRef<"ShopItem", 'String'>
    readonly isActive: FieldRef<"ShopItem", 'Boolean'>
    readonly createdAt: FieldRef<"ShopItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShopItem findUnique
   */
  export type ShopItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopItem
     */
    omit?: ShopItemOmit<ExtArgs> | null
    /**
     * Filter, which ShopItem to fetch.
     */
    where: ShopItemWhereUniqueInput
  }

  /**
   * ShopItem findUniqueOrThrow
   */
  export type ShopItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopItem
     */
    omit?: ShopItemOmit<ExtArgs> | null
    /**
     * Filter, which ShopItem to fetch.
     */
    where: ShopItemWhereUniqueInput
  }

  /**
   * ShopItem findFirst
   */
  export type ShopItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopItem
     */
    omit?: ShopItemOmit<ExtArgs> | null
    /**
     * Filter, which ShopItem to fetch.
     */
    where?: ShopItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopItems to fetch.
     */
    orderBy?: ShopItemOrderByWithRelationInput | ShopItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopItems.
     */
    cursor?: ShopItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopItems.
     */
    distinct?: ShopItemScalarFieldEnum | ShopItemScalarFieldEnum[]
  }

  /**
   * ShopItem findFirstOrThrow
   */
  export type ShopItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopItem
     */
    omit?: ShopItemOmit<ExtArgs> | null
    /**
     * Filter, which ShopItem to fetch.
     */
    where?: ShopItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopItems to fetch.
     */
    orderBy?: ShopItemOrderByWithRelationInput | ShopItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopItems.
     */
    cursor?: ShopItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopItems.
     */
    distinct?: ShopItemScalarFieldEnum | ShopItemScalarFieldEnum[]
  }

  /**
   * ShopItem findMany
   */
  export type ShopItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopItem
     */
    omit?: ShopItemOmit<ExtArgs> | null
    /**
     * Filter, which ShopItems to fetch.
     */
    where?: ShopItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopItems to fetch.
     */
    orderBy?: ShopItemOrderByWithRelationInput | ShopItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopItems.
     */
    cursor?: ShopItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopItems.
     */
    skip?: number
    distinct?: ShopItemScalarFieldEnum | ShopItemScalarFieldEnum[]
  }

  /**
   * ShopItem create
   */
  export type ShopItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopItem
     */
    omit?: ShopItemOmit<ExtArgs> | null
    /**
     * The data needed to create a ShopItem.
     */
    data: XOR<ShopItemCreateInput, ShopItemUncheckedCreateInput>
  }

  /**
   * ShopItem createMany
   */
  export type ShopItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopItems.
     */
    data: ShopItemCreateManyInput | ShopItemCreateManyInput[]
  }

  /**
   * ShopItem update
   */
  export type ShopItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopItem
     */
    omit?: ShopItemOmit<ExtArgs> | null
    /**
     * The data needed to update a ShopItem.
     */
    data: XOR<ShopItemUpdateInput, ShopItemUncheckedUpdateInput>
    /**
     * Choose, which ShopItem to update.
     */
    where: ShopItemWhereUniqueInput
  }

  /**
   * ShopItem updateMany
   */
  export type ShopItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopItems.
     */
    data: XOR<ShopItemUpdateManyMutationInput, ShopItemUncheckedUpdateManyInput>
    /**
     * Filter which ShopItems to update
     */
    where?: ShopItemWhereInput
    /**
     * Limit how many ShopItems to update.
     */
    limit?: number
  }

  /**
   * ShopItem upsert
   */
  export type ShopItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopItem
     */
    omit?: ShopItemOmit<ExtArgs> | null
    /**
     * The filter to search for the ShopItem to update in case it exists.
     */
    where: ShopItemWhereUniqueInput
    /**
     * In case the ShopItem found by the `where` argument doesn't exist, create a new ShopItem with this data.
     */
    create: XOR<ShopItemCreateInput, ShopItemUncheckedCreateInput>
    /**
     * In case the ShopItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopItemUpdateInput, ShopItemUncheckedUpdateInput>
  }

  /**
   * ShopItem delete
   */
  export type ShopItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopItem
     */
    omit?: ShopItemOmit<ExtArgs> | null
    /**
     * Filter which ShopItem to delete.
     */
    where: ShopItemWhereUniqueInput
  }

  /**
   * ShopItem deleteMany
   */
  export type ShopItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopItems to delete
     */
    where?: ShopItemWhereInput
    /**
     * Limit how many ShopItems to delete.
     */
    limit?: number
  }

  /**
   * ShopItem findRaw
   */
  export type ShopItemFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ShopItem aggregateRaw
   */
  export type ShopItemAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ShopItem without action
   */
  export type ShopItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopItem
     */
    omit?: ShopItemOmit<ExtArgs> | null
  }


  /**
   * Model Purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    itemId: string | null
    purchasedAt: Date | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    itemId: string | null
    purchasedAt: Date | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    userId: number
    itemId: number
    purchasedAt: number
    _all: number
  }


  export type PurchaseMinAggregateInputType = {
    id?: true
    userId?: true
    itemId?: true
    purchasedAt?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    userId?: true
    itemId?: true
    purchasedAt?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    userId?: true
    itemId?: true
    purchasedAt?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase to aggregate.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithAggregationInput | PurchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    id: string
    userId: string
    itemId: string
    purchasedAt: Date
    _count: PurchaseCountAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    itemId?: boolean
    purchasedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>



  export type PurchaseSelectScalar = {
    id?: boolean
    userId?: boolean
    itemId?: boolean
    purchasedAt?: boolean
  }

  export type PurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "itemId" | "purchasedAt", ExtArgs["result"]["purchase"]>
  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      itemId: string
      purchasedAt: Date
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }

  type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = $Result.GetResult<Prisma.$PurchasePayload, S>

  type PurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface PurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchase'], meta: { name: 'Purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseFindUniqueArgs>(args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseFindFirstArgs>(args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseFindManyArgs>(args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
     */
    create<T extends PurchaseCreateArgs>(args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseCreateManyArgs>(args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
     */
    delete<T extends PurchaseDeleteArgs>(args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseUpdateArgs>(args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseUpdateManyArgs>(args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseUpsertArgs>(args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * @param {PurchaseFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const purchase = await prisma.purchase.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PurchaseFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Purchase.
     * @param {PurchaseAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const purchase = await prisma.purchase.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PurchaseAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
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
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchase model
   */
  readonly fields: PurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Purchase model
   */
  interface PurchaseFieldRefs {
    readonly id: FieldRef<"Purchase", 'String'>
    readonly userId: FieldRef<"Purchase", 'String'>
    readonly itemId: FieldRef<"Purchase", 'String'>
    readonly purchasedAt: FieldRef<"Purchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase create
   */
  export type PurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchase.
     */
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }

  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
  }

  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchase.
     */
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
  }

  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     */
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     */
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }

  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter which Purchase to delete.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to delete.
     */
    limit?: number
  }

  /**
   * Purchase findRaw
   */
  export type PurchaseFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Purchase aggregateRaw
   */
  export type PurchaseAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Purchase without action
   */
  export type PurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
  }


  /**
   * Model DailyQuizCompletion
   */

  export type AggregateDailyQuizCompletion = {
    _count: DailyQuizCompletionCountAggregateOutputType | null
    _avg: DailyQuizCompletionAvgAggregateOutputType | null
    _sum: DailyQuizCompletionSumAggregateOutputType | null
    _min: DailyQuizCompletionMinAggregateOutputType | null
    _max: DailyQuizCompletionMaxAggregateOutputType | null
  }

  export type DailyQuizCompletionAvgAggregateOutputType = {
    score: number | null
    totalQ: number | null
    coinsEarned: number | null
    xpEarned: number | null
  }

  export type DailyQuizCompletionSumAggregateOutputType = {
    score: number | null
    totalQ: number | null
    coinsEarned: number | null
    xpEarned: number | null
  }

  export type DailyQuizCompletionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: string | null
    score: number | null
    totalQ: number | null
    coinsEarned: number | null
    xpEarned: number | null
    completedAt: Date | null
  }

  export type DailyQuizCompletionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: string | null
    score: number | null
    totalQ: number | null
    coinsEarned: number | null
    xpEarned: number | null
    completedAt: Date | null
  }

  export type DailyQuizCompletionCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    score: number
    totalQ: number
    coinsEarned: number
    xpEarned: number
    completedAt: number
    _all: number
  }


  export type DailyQuizCompletionAvgAggregateInputType = {
    score?: true
    totalQ?: true
    coinsEarned?: true
    xpEarned?: true
  }

  export type DailyQuizCompletionSumAggregateInputType = {
    score?: true
    totalQ?: true
    coinsEarned?: true
    xpEarned?: true
  }

  export type DailyQuizCompletionMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    score?: true
    totalQ?: true
    coinsEarned?: true
    xpEarned?: true
    completedAt?: true
  }

  export type DailyQuizCompletionMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    score?: true
    totalQ?: true
    coinsEarned?: true
    xpEarned?: true
    completedAt?: true
  }

  export type DailyQuizCompletionCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    score?: true
    totalQ?: true
    coinsEarned?: true
    xpEarned?: true
    completedAt?: true
    _all?: true
  }

  export type DailyQuizCompletionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyQuizCompletion to aggregate.
     */
    where?: DailyQuizCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyQuizCompletions to fetch.
     */
    orderBy?: DailyQuizCompletionOrderByWithRelationInput | DailyQuizCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyQuizCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyQuizCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyQuizCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyQuizCompletions
    **/
    _count?: true | DailyQuizCompletionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyQuizCompletionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyQuizCompletionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyQuizCompletionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyQuizCompletionMaxAggregateInputType
  }

  export type GetDailyQuizCompletionAggregateType<T extends DailyQuizCompletionAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyQuizCompletion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyQuizCompletion[P]>
      : GetScalarType<T[P], AggregateDailyQuizCompletion[P]>
  }




  export type DailyQuizCompletionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyQuizCompletionWhereInput
    orderBy?: DailyQuizCompletionOrderByWithAggregationInput | DailyQuizCompletionOrderByWithAggregationInput[]
    by: DailyQuizCompletionScalarFieldEnum[] | DailyQuizCompletionScalarFieldEnum
    having?: DailyQuizCompletionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyQuizCompletionCountAggregateInputType | true
    _avg?: DailyQuizCompletionAvgAggregateInputType
    _sum?: DailyQuizCompletionSumAggregateInputType
    _min?: DailyQuizCompletionMinAggregateInputType
    _max?: DailyQuizCompletionMaxAggregateInputType
  }

  export type DailyQuizCompletionGroupByOutputType = {
    id: string
    userId: string
    date: string
    score: number
    totalQ: number
    coinsEarned: number
    xpEarned: number
    completedAt: Date
    _count: DailyQuizCompletionCountAggregateOutputType | null
    _avg: DailyQuizCompletionAvgAggregateOutputType | null
    _sum: DailyQuizCompletionSumAggregateOutputType | null
    _min: DailyQuizCompletionMinAggregateOutputType | null
    _max: DailyQuizCompletionMaxAggregateOutputType | null
  }

  type GetDailyQuizCompletionGroupByPayload<T extends DailyQuizCompletionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyQuizCompletionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyQuizCompletionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyQuizCompletionGroupByOutputType[P]>
            : GetScalarType<T[P], DailyQuizCompletionGroupByOutputType[P]>
        }
      >
    >


  export type DailyQuizCompletionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    score?: boolean
    totalQ?: boolean
    coinsEarned?: boolean
    xpEarned?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyQuizCompletion"]>



  export type DailyQuizCompletionSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    score?: boolean
    totalQ?: boolean
    coinsEarned?: boolean
    xpEarned?: boolean
    completedAt?: boolean
  }

  export type DailyQuizCompletionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "score" | "totalQ" | "coinsEarned" | "xpEarned" | "completedAt", ExtArgs["result"]["dailyQuizCompletion"]>
  export type DailyQuizCompletionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DailyQuizCompletionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyQuizCompletion"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: string
      score: number
      totalQ: number
      coinsEarned: number
      xpEarned: number
      completedAt: Date
    }, ExtArgs["result"]["dailyQuizCompletion"]>
    composites: {}
  }

  type DailyQuizCompletionGetPayload<S extends boolean | null | undefined | DailyQuizCompletionDefaultArgs> = $Result.GetResult<Prisma.$DailyQuizCompletionPayload, S>

  type DailyQuizCompletionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyQuizCompletionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyQuizCompletionCountAggregateInputType | true
    }

  export interface DailyQuizCompletionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyQuizCompletion'], meta: { name: 'DailyQuizCompletion' } }
    /**
     * Find zero or one DailyQuizCompletion that matches the filter.
     * @param {DailyQuizCompletionFindUniqueArgs} args - Arguments to find a DailyQuizCompletion
     * @example
     * // Get one DailyQuizCompletion
     * const dailyQuizCompletion = await prisma.dailyQuizCompletion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyQuizCompletionFindUniqueArgs>(args: SelectSubset<T, DailyQuizCompletionFindUniqueArgs<ExtArgs>>): Prisma__DailyQuizCompletionClient<$Result.GetResult<Prisma.$DailyQuizCompletionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyQuizCompletion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyQuizCompletionFindUniqueOrThrowArgs} args - Arguments to find a DailyQuizCompletion
     * @example
     * // Get one DailyQuizCompletion
     * const dailyQuizCompletion = await prisma.dailyQuizCompletion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyQuizCompletionFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyQuizCompletionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyQuizCompletionClient<$Result.GetResult<Prisma.$DailyQuizCompletionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyQuizCompletion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyQuizCompletionFindFirstArgs} args - Arguments to find a DailyQuizCompletion
     * @example
     * // Get one DailyQuizCompletion
     * const dailyQuizCompletion = await prisma.dailyQuizCompletion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyQuizCompletionFindFirstArgs>(args?: SelectSubset<T, DailyQuizCompletionFindFirstArgs<ExtArgs>>): Prisma__DailyQuizCompletionClient<$Result.GetResult<Prisma.$DailyQuizCompletionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyQuizCompletion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyQuizCompletionFindFirstOrThrowArgs} args - Arguments to find a DailyQuizCompletion
     * @example
     * // Get one DailyQuizCompletion
     * const dailyQuizCompletion = await prisma.dailyQuizCompletion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyQuizCompletionFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyQuizCompletionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyQuizCompletionClient<$Result.GetResult<Prisma.$DailyQuizCompletionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyQuizCompletions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyQuizCompletionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyQuizCompletions
     * const dailyQuizCompletions = await prisma.dailyQuizCompletion.findMany()
     * 
     * // Get first 10 DailyQuizCompletions
     * const dailyQuizCompletions = await prisma.dailyQuizCompletion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyQuizCompletionWithIdOnly = await prisma.dailyQuizCompletion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyQuizCompletionFindManyArgs>(args?: SelectSubset<T, DailyQuizCompletionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyQuizCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyQuizCompletion.
     * @param {DailyQuizCompletionCreateArgs} args - Arguments to create a DailyQuizCompletion.
     * @example
     * // Create one DailyQuizCompletion
     * const DailyQuizCompletion = await prisma.dailyQuizCompletion.create({
     *   data: {
     *     // ... data to create a DailyQuizCompletion
     *   }
     * })
     * 
     */
    create<T extends DailyQuizCompletionCreateArgs>(args: SelectSubset<T, DailyQuizCompletionCreateArgs<ExtArgs>>): Prisma__DailyQuizCompletionClient<$Result.GetResult<Prisma.$DailyQuizCompletionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyQuizCompletions.
     * @param {DailyQuizCompletionCreateManyArgs} args - Arguments to create many DailyQuizCompletions.
     * @example
     * // Create many DailyQuizCompletions
     * const dailyQuizCompletion = await prisma.dailyQuizCompletion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyQuizCompletionCreateManyArgs>(args?: SelectSubset<T, DailyQuizCompletionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DailyQuizCompletion.
     * @param {DailyQuizCompletionDeleteArgs} args - Arguments to delete one DailyQuizCompletion.
     * @example
     * // Delete one DailyQuizCompletion
     * const DailyQuizCompletion = await prisma.dailyQuizCompletion.delete({
     *   where: {
     *     // ... filter to delete one DailyQuizCompletion
     *   }
     * })
     * 
     */
    delete<T extends DailyQuizCompletionDeleteArgs>(args: SelectSubset<T, DailyQuizCompletionDeleteArgs<ExtArgs>>): Prisma__DailyQuizCompletionClient<$Result.GetResult<Prisma.$DailyQuizCompletionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyQuizCompletion.
     * @param {DailyQuizCompletionUpdateArgs} args - Arguments to update one DailyQuizCompletion.
     * @example
     * // Update one DailyQuizCompletion
     * const dailyQuizCompletion = await prisma.dailyQuizCompletion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyQuizCompletionUpdateArgs>(args: SelectSubset<T, DailyQuizCompletionUpdateArgs<ExtArgs>>): Prisma__DailyQuizCompletionClient<$Result.GetResult<Prisma.$DailyQuizCompletionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyQuizCompletions.
     * @param {DailyQuizCompletionDeleteManyArgs} args - Arguments to filter DailyQuizCompletions to delete.
     * @example
     * // Delete a few DailyQuizCompletions
     * const { count } = await prisma.dailyQuizCompletion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyQuizCompletionDeleteManyArgs>(args?: SelectSubset<T, DailyQuizCompletionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyQuizCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyQuizCompletionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyQuizCompletions
     * const dailyQuizCompletion = await prisma.dailyQuizCompletion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyQuizCompletionUpdateManyArgs>(args: SelectSubset<T, DailyQuizCompletionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyQuizCompletion.
     * @param {DailyQuizCompletionUpsertArgs} args - Arguments to update or create a DailyQuizCompletion.
     * @example
     * // Update or create a DailyQuizCompletion
     * const dailyQuizCompletion = await prisma.dailyQuizCompletion.upsert({
     *   create: {
     *     // ... data to create a DailyQuizCompletion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyQuizCompletion we want to update
     *   }
     * })
     */
    upsert<T extends DailyQuizCompletionUpsertArgs>(args: SelectSubset<T, DailyQuizCompletionUpsertArgs<ExtArgs>>): Prisma__DailyQuizCompletionClient<$Result.GetResult<Prisma.$DailyQuizCompletionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyQuizCompletions that matches the filter.
     * @param {DailyQuizCompletionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const dailyQuizCompletion = await prisma.dailyQuizCompletion.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DailyQuizCompletionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DailyQuizCompletion.
     * @param {DailyQuizCompletionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const dailyQuizCompletion = await prisma.dailyQuizCompletion.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DailyQuizCompletionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DailyQuizCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyQuizCompletionCountArgs} args - Arguments to filter DailyQuizCompletions to count.
     * @example
     * // Count the number of DailyQuizCompletions
     * const count = await prisma.dailyQuizCompletion.count({
     *   where: {
     *     // ... the filter for the DailyQuizCompletions we want to count
     *   }
     * })
    **/
    count<T extends DailyQuizCompletionCountArgs>(
      args?: Subset<T, DailyQuizCompletionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyQuizCompletionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyQuizCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyQuizCompletionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyQuizCompletionAggregateArgs>(args: Subset<T, DailyQuizCompletionAggregateArgs>): Prisma.PrismaPromise<GetDailyQuizCompletionAggregateType<T>>

    /**
     * Group by DailyQuizCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyQuizCompletionGroupByArgs} args - Group by arguments.
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
      T extends DailyQuizCompletionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyQuizCompletionGroupByArgs['orderBy'] }
        : { orderBy?: DailyQuizCompletionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyQuizCompletionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyQuizCompletionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyQuizCompletion model
   */
  readonly fields: DailyQuizCompletionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyQuizCompletion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyQuizCompletionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DailyQuizCompletion model
   */
  interface DailyQuizCompletionFieldRefs {
    readonly id: FieldRef<"DailyQuizCompletion", 'String'>
    readonly userId: FieldRef<"DailyQuizCompletion", 'String'>
    readonly date: FieldRef<"DailyQuizCompletion", 'String'>
    readonly score: FieldRef<"DailyQuizCompletion", 'Int'>
    readonly totalQ: FieldRef<"DailyQuizCompletion", 'Int'>
    readonly coinsEarned: FieldRef<"DailyQuizCompletion", 'Int'>
    readonly xpEarned: FieldRef<"DailyQuizCompletion", 'Int'>
    readonly completedAt: FieldRef<"DailyQuizCompletion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyQuizCompletion findUnique
   */
  export type DailyQuizCompletionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyQuizCompletion
     */
    select?: DailyQuizCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyQuizCompletion
     */
    omit?: DailyQuizCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyQuizCompletionInclude<ExtArgs> | null
    /**
     * Filter, which DailyQuizCompletion to fetch.
     */
    where: DailyQuizCompletionWhereUniqueInput
  }

  /**
   * DailyQuizCompletion findUniqueOrThrow
   */
  export type DailyQuizCompletionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyQuizCompletion
     */
    select?: DailyQuizCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyQuizCompletion
     */
    omit?: DailyQuizCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyQuizCompletionInclude<ExtArgs> | null
    /**
     * Filter, which DailyQuizCompletion to fetch.
     */
    where: DailyQuizCompletionWhereUniqueInput
  }

  /**
   * DailyQuizCompletion findFirst
   */
  export type DailyQuizCompletionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyQuizCompletion
     */
    select?: DailyQuizCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyQuizCompletion
     */
    omit?: DailyQuizCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyQuizCompletionInclude<ExtArgs> | null
    /**
     * Filter, which DailyQuizCompletion to fetch.
     */
    where?: DailyQuizCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyQuizCompletions to fetch.
     */
    orderBy?: DailyQuizCompletionOrderByWithRelationInput | DailyQuizCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyQuizCompletions.
     */
    cursor?: DailyQuizCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyQuizCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyQuizCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyQuizCompletions.
     */
    distinct?: DailyQuizCompletionScalarFieldEnum | DailyQuizCompletionScalarFieldEnum[]
  }

  /**
   * DailyQuizCompletion findFirstOrThrow
   */
  export type DailyQuizCompletionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyQuizCompletion
     */
    select?: DailyQuizCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyQuizCompletion
     */
    omit?: DailyQuizCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyQuizCompletionInclude<ExtArgs> | null
    /**
     * Filter, which DailyQuizCompletion to fetch.
     */
    where?: DailyQuizCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyQuizCompletions to fetch.
     */
    orderBy?: DailyQuizCompletionOrderByWithRelationInput | DailyQuizCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyQuizCompletions.
     */
    cursor?: DailyQuizCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyQuizCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyQuizCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyQuizCompletions.
     */
    distinct?: DailyQuizCompletionScalarFieldEnum | DailyQuizCompletionScalarFieldEnum[]
  }

  /**
   * DailyQuizCompletion findMany
   */
  export type DailyQuizCompletionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyQuizCompletion
     */
    select?: DailyQuizCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyQuizCompletion
     */
    omit?: DailyQuizCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyQuizCompletionInclude<ExtArgs> | null
    /**
     * Filter, which DailyQuizCompletions to fetch.
     */
    where?: DailyQuizCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyQuizCompletions to fetch.
     */
    orderBy?: DailyQuizCompletionOrderByWithRelationInput | DailyQuizCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyQuizCompletions.
     */
    cursor?: DailyQuizCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyQuizCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyQuizCompletions.
     */
    skip?: number
    distinct?: DailyQuizCompletionScalarFieldEnum | DailyQuizCompletionScalarFieldEnum[]
  }

  /**
   * DailyQuizCompletion create
   */
  export type DailyQuizCompletionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyQuizCompletion
     */
    select?: DailyQuizCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyQuizCompletion
     */
    omit?: DailyQuizCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyQuizCompletionInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyQuizCompletion.
     */
    data: XOR<DailyQuizCompletionCreateInput, DailyQuizCompletionUncheckedCreateInput>
  }

  /**
   * DailyQuizCompletion createMany
   */
  export type DailyQuizCompletionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyQuizCompletions.
     */
    data: DailyQuizCompletionCreateManyInput | DailyQuizCompletionCreateManyInput[]
  }

  /**
   * DailyQuizCompletion update
   */
  export type DailyQuizCompletionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyQuizCompletion
     */
    select?: DailyQuizCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyQuizCompletion
     */
    omit?: DailyQuizCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyQuizCompletionInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyQuizCompletion.
     */
    data: XOR<DailyQuizCompletionUpdateInput, DailyQuizCompletionUncheckedUpdateInput>
    /**
     * Choose, which DailyQuizCompletion to update.
     */
    where: DailyQuizCompletionWhereUniqueInput
  }

  /**
   * DailyQuizCompletion updateMany
   */
  export type DailyQuizCompletionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyQuizCompletions.
     */
    data: XOR<DailyQuizCompletionUpdateManyMutationInput, DailyQuizCompletionUncheckedUpdateManyInput>
    /**
     * Filter which DailyQuizCompletions to update
     */
    where?: DailyQuizCompletionWhereInput
    /**
     * Limit how many DailyQuizCompletions to update.
     */
    limit?: number
  }

  /**
   * DailyQuizCompletion upsert
   */
  export type DailyQuizCompletionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyQuizCompletion
     */
    select?: DailyQuizCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyQuizCompletion
     */
    omit?: DailyQuizCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyQuizCompletionInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyQuizCompletion to update in case it exists.
     */
    where: DailyQuizCompletionWhereUniqueInput
    /**
     * In case the DailyQuizCompletion found by the `where` argument doesn't exist, create a new DailyQuizCompletion with this data.
     */
    create: XOR<DailyQuizCompletionCreateInput, DailyQuizCompletionUncheckedCreateInput>
    /**
     * In case the DailyQuizCompletion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyQuizCompletionUpdateInput, DailyQuizCompletionUncheckedUpdateInput>
  }

  /**
   * DailyQuizCompletion delete
   */
  export type DailyQuizCompletionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyQuizCompletion
     */
    select?: DailyQuizCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyQuizCompletion
     */
    omit?: DailyQuizCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyQuizCompletionInclude<ExtArgs> | null
    /**
     * Filter which DailyQuizCompletion to delete.
     */
    where: DailyQuizCompletionWhereUniqueInput
  }

  /**
   * DailyQuizCompletion deleteMany
   */
  export type DailyQuizCompletionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyQuizCompletions to delete
     */
    where?: DailyQuizCompletionWhereInput
    /**
     * Limit how many DailyQuizCompletions to delete.
     */
    limit?: number
  }

  /**
   * DailyQuizCompletion findRaw
   */
  export type DailyQuizCompletionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DailyQuizCompletion aggregateRaw
   */
  export type DailyQuizCompletionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DailyQuizCompletion without action
   */
  export type DailyQuizCompletionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyQuizCompletion
     */
    select?: DailyQuizCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyQuizCompletion
     */
    omit?: DailyQuizCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyQuizCompletionInclude<ExtArgs> | null
  }


  /**
   * Model WeeklyStats
   */

  export type AggregateWeeklyStats = {
    _count: WeeklyStatsCountAggregateOutputType | null
    _avg: WeeklyStatsAvgAggregateOutputType | null
    _sum: WeeklyStatsSumAggregateOutputType | null
    _min: WeeklyStatsMinAggregateOutputType | null
    _max: WeeklyStatsMaxAggregateOutputType | null
  }

  export type WeeklyStatsAvgAggregateOutputType = {
    wins: number | null
    matches: number | null
    points: number | null
  }

  export type WeeklyStatsSumAggregateOutputType = {
    wins: number | null
    matches: number | null
    points: number | null
  }

  export type WeeklyStatsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    weekStart: string | null
    wins: number | null
    matches: number | null
    points: number | null
  }

  export type WeeklyStatsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    weekStart: string | null
    wins: number | null
    matches: number | null
    points: number | null
  }

  export type WeeklyStatsCountAggregateOutputType = {
    id: number
    userId: number
    weekStart: number
    wins: number
    matches: number
    points: number
    _all: number
  }


  export type WeeklyStatsAvgAggregateInputType = {
    wins?: true
    matches?: true
    points?: true
  }

  export type WeeklyStatsSumAggregateInputType = {
    wins?: true
    matches?: true
    points?: true
  }

  export type WeeklyStatsMinAggregateInputType = {
    id?: true
    userId?: true
    weekStart?: true
    wins?: true
    matches?: true
    points?: true
  }

  export type WeeklyStatsMaxAggregateInputType = {
    id?: true
    userId?: true
    weekStart?: true
    wins?: true
    matches?: true
    points?: true
  }

  export type WeeklyStatsCountAggregateInputType = {
    id?: true
    userId?: true
    weekStart?: true
    wins?: true
    matches?: true
    points?: true
    _all?: true
  }

  export type WeeklyStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyStats to aggregate.
     */
    where?: WeeklyStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyStats to fetch.
     */
    orderBy?: WeeklyStatsOrderByWithRelationInput | WeeklyStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeeklyStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeeklyStats
    **/
    _count?: true | WeeklyStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeeklyStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeeklyStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeeklyStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeeklyStatsMaxAggregateInputType
  }

  export type GetWeeklyStatsAggregateType<T extends WeeklyStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateWeeklyStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeeklyStats[P]>
      : GetScalarType<T[P], AggregateWeeklyStats[P]>
  }




  export type WeeklyStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyStatsWhereInput
    orderBy?: WeeklyStatsOrderByWithAggregationInput | WeeklyStatsOrderByWithAggregationInput[]
    by: WeeklyStatsScalarFieldEnum[] | WeeklyStatsScalarFieldEnum
    having?: WeeklyStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeeklyStatsCountAggregateInputType | true
    _avg?: WeeklyStatsAvgAggregateInputType
    _sum?: WeeklyStatsSumAggregateInputType
    _min?: WeeklyStatsMinAggregateInputType
    _max?: WeeklyStatsMaxAggregateInputType
  }

  export type WeeklyStatsGroupByOutputType = {
    id: string
    userId: string
    weekStart: string
    wins: number
    matches: number
    points: number
    _count: WeeklyStatsCountAggregateOutputType | null
    _avg: WeeklyStatsAvgAggregateOutputType | null
    _sum: WeeklyStatsSumAggregateOutputType | null
    _min: WeeklyStatsMinAggregateOutputType | null
    _max: WeeklyStatsMaxAggregateOutputType | null
  }

  type GetWeeklyStatsGroupByPayload<T extends WeeklyStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeeklyStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeeklyStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeeklyStatsGroupByOutputType[P]>
            : GetScalarType<T[P], WeeklyStatsGroupByOutputType[P]>
        }
      >
    >


  export type WeeklyStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    weekStart?: boolean
    wins?: boolean
    matches?: boolean
    points?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyStats"]>



  export type WeeklyStatsSelectScalar = {
    id?: boolean
    userId?: boolean
    weekStart?: boolean
    wins?: boolean
    matches?: boolean
    points?: boolean
  }

  export type WeeklyStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "weekStart" | "wins" | "matches" | "points", ExtArgs["result"]["weeklyStats"]>
  export type WeeklyStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WeeklyStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeeklyStats"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      weekStart: string
      wins: number
      matches: number
      points: number
    }, ExtArgs["result"]["weeklyStats"]>
    composites: {}
  }

  type WeeklyStatsGetPayload<S extends boolean | null | undefined | WeeklyStatsDefaultArgs> = $Result.GetResult<Prisma.$WeeklyStatsPayload, S>

  type WeeklyStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeeklyStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeeklyStatsCountAggregateInputType | true
    }

  export interface WeeklyStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeeklyStats'], meta: { name: 'WeeklyStats' } }
    /**
     * Find zero or one WeeklyStats that matches the filter.
     * @param {WeeklyStatsFindUniqueArgs} args - Arguments to find a WeeklyStats
     * @example
     * // Get one WeeklyStats
     * const weeklyStats = await prisma.weeklyStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeeklyStatsFindUniqueArgs>(args: SelectSubset<T, WeeklyStatsFindUniqueArgs<ExtArgs>>): Prisma__WeeklyStatsClient<$Result.GetResult<Prisma.$WeeklyStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeeklyStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeeklyStatsFindUniqueOrThrowArgs} args - Arguments to find a WeeklyStats
     * @example
     * // Get one WeeklyStats
     * const weeklyStats = await prisma.weeklyStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeeklyStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, WeeklyStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeeklyStatsClient<$Result.GetResult<Prisma.$WeeklyStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklyStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyStatsFindFirstArgs} args - Arguments to find a WeeklyStats
     * @example
     * // Get one WeeklyStats
     * const weeklyStats = await prisma.weeklyStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeeklyStatsFindFirstArgs>(args?: SelectSubset<T, WeeklyStatsFindFirstArgs<ExtArgs>>): Prisma__WeeklyStatsClient<$Result.GetResult<Prisma.$WeeklyStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklyStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyStatsFindFirstOrThrowArgs} args - Arguments to find a WeeklyStats
     * @example
     * // Get one WeeklyStats
     * const weeklyStats = await prisma.weeklyStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeeklyStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, WeeklyStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeeklyStatsClient<$Result.GetResult<Prisma.$WeeklyStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeeklyStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeeklyStats
     * const weeklyStats = await prisma.weeklyStats.findMany()
     * 
     * // Get first 10 WeeklyStats
     * const weeklyStats = await prisma.weeklyStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weeklyStatsWithIdOnly = await prisma.weeklyStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeeklyStatsFindManyArgs>(args?: SelectSubset<T, WeeklyStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeeklyStats.
     * @param {WeeklyStatsCreateArgs} args - Arguments to create a WeeklyStats.
     * @example
     * // Create one WeeklyStats
     * const WeeklyStats = await prisma.weeklyStats.create({
     *   data: {
     *     // ... data to create a WeeklyStats
     *   }
     * })
     * 
     */
    create<T extends WeeklyStatsCreateArgs>(args: SelectSubset<T, WeeklyStatsCreateArgs<ExtArgs>>): Prisma__WeeklyStatsClient<$Result.GetResult<Prisma.$WeeklyStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeeklyStats.
     * @param {WeeklyStatsCreateManyArgs} args - Arguments to create many WeeklyStats.
     * @example
     * // Create many WeeklyStats
     * const weeklyStats = await prisma.weeklyStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeeklyStatsCreateManyArgs>(args?: SelectSubset<T, WeeklyStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WeeklyStats.
     * @param {WeeklyStatsDeleteArgs} args - Arguments to delete one WeeklyStats.
     * @example
     * // Delete one WeeklyStats
     * const WeeklyStats = await prisma.weeklyStats.delete({
     *   where: {
     *     // ... filter to delete one WeeklyStats
     *   }
     * })
     * 
     */
    delete<T extends WeeklyStatsDeleteArgs>(args: SelectSubset<T, WeeklyStatsDeleteArgs<ExtArgs>>): Prisma__WeeklyStatsClient<$Result.GetResult<Prisma.$WeeklyStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeeklyStats.
     * @param {WeeklyStatsUpdateArgs} args - Arguments to update one WeeklyStats.
     * @example
     * // Update one WeeklyStats
     * const weeklyStats = await prisma.weeklyStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeeklyStatsUpdateArgs>(args: SelectSubset<T, WeeklyStatsUpdateArgs<ExtArgs>>): Prisma__WeeklyStatsClient<$Result.GetResult<Prisma.$WeeklyStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeeklyStats.
     * @param {WeeklyStatsDeleteManyArgs} args - Arguments to filter WeeklyStats to delete.
     * @example
     * // Delete a few WeeklyStats
     * const { count } = await prisma.weeklyStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeeklyStatsDeleteManyArgs>(args?: SelectSubset<T, WeeklyStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeeklyStats
     * const weeklyStats = await prisma.weeklyStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeeklyStatsUpdateManyArgs>(args: SelectSubset<T, WeeklyStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WeeklyStats.
     * @param {WeeklyStatsUpsertArgs} args - Arguments to update or create a WeeklyStats.
     * @example
     * // Update or create a WeeklyStats
     * const weeklyStats = await prisma.weeklyStats.upsert({
     *   create: {
     *     // ... data to create a WeeklyStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeeklyStats we want to update
     *   }
     * })
     */
    upsert<T extends WeeklyStatsUpsertArgs>(args: SelectSubset<T, WeeklyStatsUpsertArgs<ExtArgs>>): Prisma__WeeklyStatsClient<$Result.GetResult<Prisma.$WeeklyStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeeklyStats that matches the filter.
     * @param {WeeklyStatsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const weeklyStats = await prisma.weeklyStats.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: WeeklyStatsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a WeeklyStats.
     * @param {WeeklyStatsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const weeklyStats = await prisma.weeklyStats.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: WeeklyStatsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of WeeklyStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyStatsCountArgs} args - Arguments to filter WeeklyStats to count.
     * @example
     * // Count the number of WeeklyStats
     * const count = await prisma.weeklyStats.count({
     *   where: {
     *     // ... the filter for the WeeklyStats we want to count
     *   }
     * })
    **/
    count<T extends WeeklyStatsCountArgs>(
      args?: Subset<T, WeeklyStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeeklyStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeeklyStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeeklyStatsAggregateArgs>(args: Subset<T, WeeklyStatsAggregateArgs>): Prisma.PrismaPromise<GetWeeklyStatsAggregateType<T>>

    /**
     * Group by WeeklyStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyStatsGroupByArgs} args - Group by arguments.
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
      T extends WeeklyStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeeklyStatsGroupByArgs['orderBy'] }
        : { orderBy?: WeeklyStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeeklyStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeeklyStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeeklyStats model
   */
  readonly fields: WeeklyStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeeklyStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeeklyStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the WeeklyStats model
   */
  interface WeeklyStatsFieldRefs {
    readonly id: FieldRef<"WeeklyStats", 'String'>
    readonly userId: FieldRef<"WeeklyStats", 'String'>
    readonly weekStart: FieldRef<"WeeklyStats", 'String'>
    readonly wins: FieldRef<"WeeklyStats", 'Int'>
    readonly matches: FieldRef<"WeeklyStats", 'Int'>
    readonly points: FieldRef<"WeeklyStats", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WeeklyStats findUnique
   */
  export type WeeklyStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyStats
     */
    select?: WeeklyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyStats
     */
    omit?: WeeklyStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyStatsInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyStats to fetch.
     */
    where: WeeklyStatsWhereUniqueInput
  }

  /**
   * WeeklyStats findUniqueOrThrow
   */
  export type WeeklyStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyStats
     */
    select?: WeeklyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyStats
     */
    omit?: WeeklyStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyStatsInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyStats to fetch.
     */
    where: WeeklyStatsWhereUniqueInput
  }

  /**
   * WeeklyStats findFirst
   */
  export type WeeklyStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyStats
     */
    select?: WeeklyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyStats
     */
    omit?: WeeklyStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyStatsInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyStats to fetch.
     */
    where?: WeeklyStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyStats to fetch.
     */
    orderBy?: WeeklyStatsOrderByWithRelationInput | WeeklyStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyStats.
     */
    cursor?: WeeklyStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyStats.
     */
    distinct?: WeeklyStatsScalarFieldEnum | WeeklyStatsScalarFieldEnum[]
  }

  /**
   * WeeklyStats findFirstOrThrow
   */
  export type WeeklyStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyStats
     */
    select?: WeeklyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyStats
     */
    omit?: WeeklyStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyStatsInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyStats to fetch.
     */
    where?: WeeklyStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyStats to fetch.
     */
    orderBy?: WeeklyStatsOrderByWithRelationInput | WeeklyStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyStats.
     */
    cursor?: WeeklyStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyStats.
     */
    distinct?: WeeklyStatsScalarFieldEnum | WeeklyStatsScalarFieldEnum[]
  }

  /**
   * WeeklyStats findMany
   */
  export type WeeklyStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyStats
     */
    select?: WeeklyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyStats
     */
    omit?: WeeklyStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyStatsInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyStats to fetch.
     */
    where?: WeeklyStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyStats to fetch.
     */
    orderBy?: WeeklyStatsOrderByWithRelationInput | WeeklyStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeeklyStats.
     */
    cursor?: WeeklyStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyStats.
     */
    skip?: number
    distinct?: WeeklyStatsScalarFieldEnum | WeeklyStatsScalarFieldEnum[]
  }

  /**
   * WeeklyStats create
   */
  export type WeeklyStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyStats
     */
    select?: WeeklyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyStats
     */
    omit?: WeeklyStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a WeeklyStats.
     */
    data: XOR<WeeklyStatsCreateInput, WeeklyStatsUncheckedCreateInput>
  }

  /**
   * WeeklyStats createMany
   */
  export type WeeklyStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeeklyStats.
     */
    data: WeeklyStatsCreateManyInput | WeeklyStatsCreateManyInput[]
  }

  /**
   * WeeklyStats update
   */
  export type WeeklyStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyStats
     */
    select?: WeeklyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyStats
     */
    omit?: WeeklyStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a WeeklyStats.
     */
    data: XOR<WeeklyStatsUpdateInput, WeeklyStatsUncheckedUpdateInput>
    /**
     * Choose, which WeeklyStats to update.
     */
    where: WeeklyStatsWhereUniqueInput
  }

  /**
   * WeeklyStats updateMany
   */
  export type WeeklyStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeeklyStats.
     */
    data: XOR<WeeklyStatsUpdateManyMutationInput, WeeklyStatsUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyStats to update
     */
    where?: WeeklyStatsWhereInput
    /**
     * Limit how many WeeklyStats to update.
     */
    limit?: number
  }

  /**
   * WeeklyStats upsert
   */
  export type WeeklyStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyStats
     */
    select?: WeeklyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyStats
     */
    omit?: WeeklyStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the WeeklyStats to update in case it exists.
     */
    where: WeeklyStatsWhereUniqueInput
    /**
     * In case the WeeklyStats found by the `where` argument doesn't exist, create a new WeeklyStats with this data.
     */
    create: XOR<WeeklyStatsCreateInput, WeeklyStatsUncheckedCreateInput>
    /**
     * In case the WeeklyStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeeklyStatsUpdateInput, WeeklyStatsUncheckedUpdateInput>
  }

  /**
   * WeeklyStats delete
   */
  export type WeeklyStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyStats
     */
    select?: WeeklyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyStats
     */
    omit?: WeeklyStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyStatsInclude<ExtArgs> | null
    /**
     * Filter which WeeklyStats to delete.
     */
    where: WeeklyStatsWhereUniqueInput
  }

  /**
   * WeeklyStats deleteMany
   */
  export type WeeklyStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyStats to delete
     */
    where?: WeeklyStatsWhereInput
    /**
     * Limit how many WeeklyStats to delete.
     */
    limit?: number
  }

  /**
   * WeeklyStats findRaw
   */
  export type WeeklyStatsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * WeeklyStats aggregateRaw
   */
  export type WeeklyStatsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * WeeklyStats without action
   */
  export type WeeklyStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyStats
     */
    select?: WeeklyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyStats
     */
    omit?: WeeklyStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyStatsInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    type: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    type: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    message: number
    type: number
    read: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    read?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    read?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    read?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    title: string
    message: string
    type: string
    read: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "message" | "type" | "read" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      message: string
      type: string
      read: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * @param {NotificationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const notification = await prisma.notification.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: NotificationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Notification.
     * @param {NotificationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const notification = await prisma.notification.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: NotificationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification findRaw
   */
  export type NotificationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Notification aggregateRaw
   */
  export type NotificationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model GeneralProgress
   */

  export type AggregateGeneralProgress = {
    _count: GeneralProgressCountAggregateOutputType | null
    _avg: GeneralProgressAvgAggregateOutputType | null
    _sum: GeneralProgressSumAggregateOutputType | null
    _min: GeneralProgressMinAggregateOutputType | null
    _max: GeneralProgressMaxAggregateOutputType | null
  }

  export type GeneralProgressAvgAggregateOutputType = {
    unlockedLevel: number | null
  }

  export type GeneralProgressSumAggregateOutputType = {
    unlockedLevel: number | null
  }

  export type GeneralProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    category: string | null
    unlockedLevel: number | null
    updatedAt: Date | null
  }

  export type GeneralProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    category: string | null
    unlockedLevel: number | null
    updatedAt: Date | null
  }

  export type GeneralProgressCountAggregateOutputType = {
    id: number
    userId: number
    category: number
    unlockedLevel: number
    updatedAt: number
    _all: number
  }


  export type GeneralProgressAvgAggregateInputType = {
    unlockedLevel?: true
  }

  export type GeneralProgressSumAggregateInputType = {
    unlockedLevel?: true
  }

  export type GeneralProgressMinAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    unlockedLevel?: true
    updatedAt?: true
  }

  export type GeneralProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    unlockedLevel?: true
    updatedAt?: true
  }

  export type GeneralProgressCountAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    unlockedLevel?: true
    updatedAt?: true
    _all?: true
  }

  export type GeneralProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneralProgress to aggregate.
     */
    where?: GeneralProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralProgresses to fetch.
     */
    orderBy?: GeneralProgressOrderByWithRelationInput | GeneralProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneralProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneralProgresses
    **/
    _count?: true | GeneralProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneralProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneralProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneralProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneralProgressMaxAggregateInputType
  }

  export type GetGeneralProgressAggregateType<T extends GeneralProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneralProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneralProgress[P]>
      : GetScalarType<T[P], AggregateGeneralProgress[P]>
  }




  export type GeneralProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneralProgressWhereInput
    orderBy?: GeneralProgressOrderByWithAggregationInput | GeneralProgressOrderByWithAggregationInput[]
    by: GeneralProgressScalarFieldEnum[] | GeneralProgressScalarFieldEnum
    having?: GeneralProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneralProgressCountAggregateInputType | true
    _avg?: GeneralProgressAvgAggregateInputType
    _sum?: GeneralProgressSumAggregateInputType
    _min?: GeneralProgressMinAggregateInputType
    _max?: GeneralProgressMaxAggregateInputType
  }

  export type GeneralProgressGroupByOutputType = {
    id: string
    userId: string
    category: string
    unlockedLevel: number
    updatedAt: Date
    _count: GeneralProgressCountAggregateOutputType | null
    _avg: GeneralProgressAvgAggregateOutputType | null
    _sum: GeneralProgressSumAggregateOutputType | null
    _min: GeneralProgressMinAggregateOutputType | null
    _max: GeneralProgressMaxAggregateOutputType | null
  }

  type GetGeneralProgressGroupByPayload<T extends GeneralProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneralProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneralProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneralProgressGroupByOutputType[P]>
            : GetScalarType<T[P], GeneralProgressGroupByOutputType[P]>
        }
      >
    >


  export type GeneralProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    unlockedLevel?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generalProgress"]>



  export type GeneralProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    category?: boolean
    unlockedLevel?: boolean
    updatedAt?: boolean
  }

  export type GeneralProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "category" | "unlockedLevel" | "updatedAt", ExtArgs["result"]["generalProgress"]>
  export type GeneralProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GeneralProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeneralProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      category: string
      unlockedLevel: number
      updatedAt: Date
    }, ExtArgs["result"]["generalProgress"]>
    composites: {}
  }

  type GeneralProgressGetPayload<S extends boolean | null | undefined | GeneralProgressDefaultArgs> = $Result.GetResult<Prisma.$GeneralProgressPayload, S>

  type GeneralProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneralProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneralProgressCountAggregateInputType | true
    }

  export interface GeneralProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeneralProgress'], meta: { name: 'GeneralProgress' } }
    /**
     * Find zero or one GeneralProgress that matches the filter.
     * @param {GeneralProgressFindUniqueArgs} args - Arguments to find a GeneralProgress
     * @example
     * // Get one GeneralProgress
     * const generalProgress = await prisma.generalProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneralProgressFindUniqueArgs>(args: SelectSubset<T, GeneralProgressFindUniqueArgs<ExtArgs>>): Prisma__GeneralProgressClient<$Result.GetResult<Prisma.$GeneralProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GeneralProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneralProgressFindUniqueOrThrowArgs} args - Arguments to find a GeneralProgress
     * @example
     * // Get one GeneralProgress
     * const generalProgress = await prisma.generalProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneralProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneralProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneralProgressClient<$Result.GetResult<Prisma.$GeneralProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneralProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralProgressFindFirstArgs} args - Arguments to find a GeneralProgress
     * @example
     * // Get one GeneralProgress
     * const generalProgress = await prisma.generalProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneralProgressFindFirstArgs>(args?: SelectSubset<T, GeneralProgressFindFirstArgs<ExtArgs>>): Prisma__GeneralProgressClient<$Result.GetResult<Prisma.$GeneralProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneralProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralProgressFindFirstOrThrowArgs} args - Arguments to find a GeneralProgress
     * @example
     * // Get one GeneralProgress
     * const generalProgress = await prisma.generalProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneralProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneralProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneralProgressClient<$Result.GetResult<Prisma.$GeneralProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeneralProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneralProgresses
     * const generalProgresses = await prisma.generalProgress.findMany()
     * 
     * // Get first 10 GeneralProgresses
     * const generalProgresses = await prisma.generalProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generalProgressWithIdOnly = await prisma.generalProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneralProgressFindManyArgs>(args?: SelectSubset<T, GeneralProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneralProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GeneralProgress.
     * @param {GeneralProgressCreateArgs} args - Arguments to create a GeneralProgress.
     * @example
     * // Create one GeneralProgress
     * const GeneralProgress = await prisma.generalProgress.create({
     *   data: {
     *     // ... data to create a GeneralProgress
     *   }
     * })
     * 
     */
    create<T extends GeneralProgressCreateArgs>(args: SelectSubset<T, GeneralProgressCreateArgs<ExtArgs>>): Prisma__GeneralProgressClient<$Result.GetResult<Prisma.$GeneralProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GeneralProgresses.
     * @param {GeneralProgressCreateManyArgs} args - Arguments to create many GeneralProgresses.
     * @example
     * // Create many GeneralProgresses
     * const generalProgress = await prisma.generalProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneralProgressCreateManyArgs>(args?: SelectSubset<T, GeneralProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GeneralProgress.
     * @param {GeneralProgressDeleteArgs} args - Arguments to delete one GeneralProgress.
     * @example
     * // Delete one GeneralProgress
     * const GeneralProgress = await prisma.generalProgress.delete({
     *   where: {
     *     // ... filter to delete one GeneralProgress
     *   }
     * })
     * 
     */
    delete<T extends GeneralProgressDeleteArgs>(args: SelectSubset<T, GeneralProgressDeleteArgs<ExtArgs>>): Prisma__GeneralProgressClient<$Result.GetResult<Prisma.$GeneralProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GeneralProgress.
     * @param {GeneralProgressUpdateArgs} args - Arguments to update one GeneralProgress.
     * @example
     * // Update one GeneralProgress
     * const generalProgress = await prisma.generalProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneralProgressUpdateArgs>(args: SelectSubset<T, GeneralProgressUpdateArgs<ExtArgs>>): Prisma__GeneralProgressClient<$Result.GetResult<Prisma.$GeneralProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GeneralProgresses.
     * @param {GeneralProgressDeleteManyArgs} args - Arguments to filter GeneralProgresses to delete.
     * @example
     * // Delete a few GeneralProgresses
     * const { count } = await prisma.generalProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneralProgressDeleteManyArgs>(args?: SelectSubset<T, GeneralProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneralProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneralProgresses
     * const generalProgress = await prisma.generalProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneralProgressUpdateManyArgs>(args: SelectSubset<T, GeneralProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GeneralProgress.
     * @param {GeneralProgressUpsertArgs} args - Arguments to update or create a GeneralProgress.
     * @example
     * // Update or create a GeneralProgress
     * const generalProgress = await prisma.generalProgress.upsert({
     *   create: {
     *     // ... data to create a GeneralProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneralProgress we want to update
     *   }
     * })
     */
    upsert<T extends GeneralProgressUpsertArgs>(args: SelectSubset<T, GeneralProgressUpsertArgs<ExtArgs>>): Prisma__GeneralProgressClient<$Result.GetResult<Prisma.$GeneralProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeneralProgresses that matches the filter.
     * @param {GeneralProgressFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const generalProgress = await prisma.generalProgress.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: GeneralProgressFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a GeneralProgress.
     * @param {GeneralProgressAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const generalProgress = await prisma.generalProgress.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: GeneralProgressAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of GeneralProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralProgressCountArgs} args - Arguments to filter GeneralProgresses to count.
     * @example
     * // Count the number of GeneralProgresses
     * const count = await prisma.generalProgress.count({
     *   where: {
     *     // ... the filter for the GeneralProgresses we want to count
     *   }
     * })
    **/
    count<T extends GeneralProgressCountArgs>(
      args?: Subset<T, GeneralProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneralProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneralProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneralProgressAggregateArgs>(args: Subset<T, GeneralProgressAggregateArgs>): Prisma.PrismaPromise<GetGeneralProgressAggregateType<T>>

    /**
     * Group by GeneralProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralProgressGroupByArgs} args - Group by arguments.
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
      T extends GeneralProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneralProgressGroupByArgs['orderBy'] }
        : { orderBy?: GeneralProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeneralProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneralProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeneralProgress model
   */
  readonly fields: GeneralProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneralProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneralProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GeneralProgress model
   */
  interface GeneralProgressFieldRefs {
    readonly id: FieldRef<"GeneralProgress", 'String'>
    readonly userId: FieldRef<"GeneralProgress", 'String'>
    readonly category: FieldRef<"GeneralProgress", 'String'>
    readonly unlockedLevel: FieldRef<"GeneralProgress", 'Int'>
    readonly updatedAt: FieldRef<"GeneralProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GeneralProgress findUnique
   */
  export type GeneralProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralProgress
     */
    select?: GeneralProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralProgress
     */
    omit?: GeneralProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralProgressInclude<ExtArgs> | null
    /**
     * Filter, which GeneralProgress to fetch.
     */
    where: GeneralProgressWhereUniqueInput
  }

  /**
   * GeneralProgress findUniqueOrThrow
   */
  export type GeneralProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralProgress
     */
    select?: GeneralProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralProgress
     */
    omit?: GeneralProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralProgressInclude<ExtArgs> | null
    /**
     * Filter, which GeneralProgress to fetch.
     */
    where: GeneralProgressWhereUniqueInput
  }

  /**
   * GeneralProgress findFirst
   */
  export type GeneralProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralProgress
     */
    select?: GeneralProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralProgress
     */
    omit?: GeneralProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralProgressInclude<ExtArgs> | null
    /**
     * Filter, which GeneralProgress to fetch.
     */
    where?: GeneralProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralProgresses to fetch.
     */
    orderBy?: GeneralProgressOrderByWithRelationInput | GeneralProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneralProgresses.
     */
    cursor?: GeneralProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneralProgresses.
     */
    distinct?: GeneralProgressScalarFieldEnum | GeneralProgressScalarFieldEnum[]
  }

  /**
   * GeneralProgress findFirstOrThrow
   */
  export type GeneralProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralProgress
     */
    select?: GeneralProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralProgress
     */
    omit?: GeneralProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralProgressInclude<ExtArgs> | null
    /**
     * Filter, which GeneralProgress to fetch.
     */
    where?: GeneralProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralProgresses to fetch.
     */
    orderBy?: GeneralProgressOrderByWithRelationInput | GeneralProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneralProgresses.
     */
    cursor?: GeneralProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneralProgresses.
     */
    distinct?: GeneralProgressScalarFieldEnum | GeneralProgressScalarFieldEnum[]
  }

  /**
   * GeneralProgress findMany
   */
  export type GeneralProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralProgress
     */
    select?: GeneralProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralProgress
     */
    omit?: GeneralProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralProgressInclude<ExtArgs> | null
    /**
     * Filter, which GeneralProgresses to fetch.
     */
    where?: GeneralProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralProgresses to fetch.
     */
    orderBy?: GeneralProgressOrderByWithRelationInput | GeneralProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneralProgresses.
     */
    cursor?: GeneralProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralProgresses.
     */
    skip?: number
    distinct?: GeneralProgressScalarFieldEnum | GeneralProgressScalarFieldEnum[]
  }

  /**
   * GeneralProgress create
   */
  export type GeneralProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralProgress
     */
    select?: GeneralProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralProgress
     */
    omit?: GeneralProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a GeneralProgress.
     */
    data: XOR<GeneralProgressCreateInput, GeneralProgressUncheckedCreateInput>
  }

  /**
   * GeneralProgress createMany
   */
  export type GeneralProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeneralProgresses.
     */
    data: GeneralProgressCreateManyInput | GeneralProgressCreateManyInput[]
  }

  /**
   * GeneralProgress update
   */
  export type GeneralProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralProgress
     */
    select?: GeneralProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralProgress
     */
    omit?: GeneralProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a GeneralProgress.
     */
    data: XOR<GeneralProgressUpdateInput, GeneralProgressUncheckedUpdateInput>
    /**
     * Choose, which GeneralProgress to update.
     */
    where: GeneralProgressWhereUniqueInput
  }

  /**
   * GeneralProgress updateMany
   */
  export type GeneralProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeneralProgresses.
     */
    data: XOR<GeneralProgressUpdateManyMutationInput, GeneralProgressUncheckedUpdateManyInput>
    /**
     * Filter which GeneralProgresses to update
     */
    where?: GeneralProgressWhereInput
    /**
     * Limit how many GeneralProgresses to update.
     */
    limit?: number
  }

  /**
   * GeneralProgress upsert
   */
  export type GeneralProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralProgress
     */
    select?: GeneralProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralProgress
     */
    omit?: GeneralProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the GeneralProgress to update in case it exists.
     */
    where: GeneralProgressWhereUniqueInput
    /**
     * In case the GeneralProgress found by the `where` argument doesn't exist, create a new GeneralProgress with this data.
     */
    create: XOR<GeneralProgressCreateInput, GeneralProgressUncheckedCreateInput>
    /**
     * In case the GeneralProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneralProgressUpdateInput, GeneralProgressUncheckedUpdateInput>
  }

  /**
   * GeneralProgress delete
   */
  export type GeneralProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralProgress
     */
    select?: GeneralProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralProgress
     */
    omit?: GeneralProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralProgressInclude<ExtArgs> | null
    /**
     * Filter which GeneralProgress to delete.
     */
    where: GeneralProgressWhereUniqueInput
  }

  /**
   * GeneralProgress deleteMany
   */
  export type GeneralProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneralProgresses to delete
     */
    where?: GeneralProgressWhereInput
    /**
     * Limit how many GeneralProgresses to delete.
     */
    limit?: number
  }

  /**
   * GeneralProgress findRaw
   */
  export type GeneralProgressFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * GeneralProgress aggregateRaw
   */
  export type GeneralProgressAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * GeneralProgress without action
   */
  export type GeneralProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralProgress
     */
    select?: GeneralProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneralProgress
     */
    omit?: GeneralProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralProgressInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    passwordHash: 'passwordHash',
    avatarUrl: 'avatarUrl',
    avatarFrameId: 'avatarFrameId',
    bio: 'bio',
    level: 'level',
    xp: 'xp',
    coins: 'coins',
    rankedPoints: 'rankedPoints',
    totalWins: 'totalWins',
    totalMatches: 'totalMatches',
    longestStreak: 'longestStreak',
    loginStreak: 'loginStreak',
    lastLoginDate: 'lastLoginDate',
    lastSpinDate: 'lastSpinDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    options: 'options',
    answerIndex: 'answerIndex',
    category: 'category',
    difficulty: 'difficulty',
    explanation: 'explanation',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    type: 'type',
    status: 'status',
    player1Id: 'player1Id',
    player2Id: 'player2Id',
    winnerId: 'winnerId',
    player1Score: 'player1Score',
    player2Score: 'player2Score',
    player1Finished: 'player1Finished',
    player2Finished: 'player2Finished',
    coinStake: 'coinStake',
    questionIds: 'questionIds',
    tournamentId: 'tournamentId',
    roundNumber: 'roundNumber',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const TournamentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    entryFee: 'entryFee',
    prizePool: 'prizePool',
    maxPlayers: 'maxPlayers',
    status: 'status',
    bracket: 'bracket',
    winnerId: 'winnerId',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt'
  };

  export type TournamentScalarFieldEnum = (typeof TournamentScalarFieldEnum)[keyof typeof TournamentScalarFieldEnum]


  export const TournamentEntryScalarFieldEnum: {
    id: 'id',
    tournamentId: 'tournamentId',
    userId: 'userId',
    joinedAt: 'joinedAt',
    eliminated: 'eliminated',
    placement: 'placement'
  };

  export type TournamentEntryScalarFieldEnum = (typeof TournamentEntryScalarFieldEnum)[keyof typeof TournamentEntryScalarFieldEnum]


  export const ShopItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    type: 'type',
    imageUrl: 'imageUrl',
    cost: 'cost',
    rarity: 'rarity',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type ShopItemScalarFieldEnum = (typeof ShopItemScalarFieldEnum)[keyof typeof ShopItemScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    itemId: 'itemId',
    purchasedAt: 'purchasedAt'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const DailyQuizCompletionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    score: 'score',
    totalQ: 'totalQ',
    coinsEarned: 'coinsEarned',
    xpEarned: 'xpEarned',
    completedAt: 'completedAt'
  };

  export type DailyQuizCompletionScalarFieldEnum = (typeof DailyQuizCompletionScalarFieldEnum)[keyof typeof DailyQuizCompletionScalarFieldEnum]


  export const WeeklyStatsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    weekStart: 'weekStart',
    wins: 'wins',
    matches: 'matches',
    points: 'points'
  };

  export type WeeklyStatsScalarFieldEnum = (typeof WeeklyStatsScalarFieldEnum)[keyof typeof WeeklyStatsScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    type: 'type',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const GeneralProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    category: 'category',
    unlockedLevel: 'unlockedLevel',
    updatedAt: 'updatedAt'
  };

  export type GeneralProgressScalarFieldEnum = (typeof GeneralProgressScalarFieldEnum)[keyof typeof GeneralProgressScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


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
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    avatarFrameId?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    level?: IntFilter<"User"> | number
    xp?: IntFilter<"User"> | number
    coins?: IntFilter<"User"> | number
    rankedPoints?: IntFilter<"User"> | number
    totalWins?: IntFilter<"User"> | number
    totalMatches?: IntFilter<"User"> | number
    longestStreak?: IntFilter<"User"> | number
    loginStreak?: IntFilter<"User"> | number
    lastLoginDate?: DateTimeNullableFilter<"User"> | Date | string | null
    lastSpinDate?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    matchesAsP1?: MatchListRelationFilter
    matchesAsP2?: MatchListRelationFilter
    purchases?: PurchaseListRelationFilter
    weeklyStats?: WeeklyStatsListRelationFilter
    dailyCompletions?: DailyQuizCompletionListRelationFilter
    tournamentEntries?: TournamentEntryListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    notifications?: NotificationListRelationFilter
    generalProgress?: GeneralProgressListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrder
    avatarFrameId?: SortOrder
    bio?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    coins?: SortOrder
    rankedPoints?: SortOrder
    totalWins?: SortOrder
    totalMatches?: SortOrder
    longestStreak?: SortOrder
    loginStreak?: SortOrder
    lastLoginDate?: SortOrder
    lastSpinDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    matchesAsP1?: MatchOrderByRelationAggregateInput
    matchesAsP2?: MatchOrderByRelationAggregateInput
    purchases?: PurchaseOrderByRelationAggregateInput
    weeklyStats?: WeeklyStatsOrderByRelationAggregateInput
    dailyCompletions?: DailyQuizCompletionOrderByRelationAggregateInput
    tournamentEntries?: TournamentEntryOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    generalProgress?: GeneralProgressOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    avatarFrameId?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    level?: IntFilter<"User"> | number
    xp?: IntFilter<"User"> | number
    coins?: IntFilter<"User"> | number
    rankedPoints?: IntFilter<"User"> | number
    totalWins?: IntFilter<"User"> | number
    totalMatches?: IntFilter<"User"> | number
    longestStreak?: IntFilter<"User"> | number
    loginStreak?: IntFilter<"User"> | number
    lastLoginDate?: DateTimeNullableFilter<"User"> | Date | string | null
    lastSpinDate?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    matchesAsP1?: MatchListRelationFilter
    matchesAsP2?: MatchListRelationFilter
    purchases?: PurchaseListRelationFilter
    weeklyStats?: WeeklyStatsListRelationFilter
    dailyCompletions?: DailyQuizCompletionListRelationFilter
    tournamentEntries?: TournamentEntryListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    notifications?: NotificationListRelationFilter
    generalProgress?: GeneralProgressListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrder
    avatarFrameId?: SortOrder
    bio?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    coins?: SortOrder
    rankedPoints?: SortOrder
    totalWins?: SortOrder
    totalMatches?: SortOrder
    longestStreak?: SortOrder
    loginStreak?: SortOrder
    lastLoginDate?: SortOrder
    lastSpinDate?: SortOrder
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
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarFrameId?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    level?: IntWithAggregatesFilter<"User"> | number
    xp?: IntWithAggregatesFilter<"User"> | number
    coins?: IntWithAggregatesFilter<"User"> | number
    rankedPoints?: IntWithAggregatesFilter<"User"> | number
    totalWins?: IntWithAggregatesFilter<"User"> | number
    totalMatches?: IntWithAggregatesFilter<"User"> | number
    longestStreak?: IntWithAggregatesFilter<"User"> | number
    loginStreak?: IntWithAggregatesFilter<"User"> | number
    lastLoginDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lastSpinDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    id?: StringFilter<"VerificationToken"> | string
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "id" | "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationToken"> | string
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    options?: StringNullableListFilter<"Question">
    answerIndex?: IntFilter<"Question"> | number
    category?: StringFilter<"Question"> | string
    difficulty?: StringFilter<"Question"> | string
    explanation?: StringNullableFilter<"Question"> | string | null
    isActive?: BoolFilter<"Question"> | boolean
    createdAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    options?: SortOrder
    answerIndex?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    explanation?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    text?: StringFilter<"Question"> | string
    options?: StringNullableListFilter<"Question">
    answerIndex?: IntFilter<"Question"> | number
    category?: StringFilter<"Question"> | string
    difficulty?: StringFilter<"Question"> | string
    explanation?: StringNullableFilter<"Question"> | string | null
    isActive?: BoolFilter<"Question"> | boolean
    createdAt?: DateTimeFilter<"Question"> | Date | string
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    options?: SortOrder
    answerIndex?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    explanation?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    text?: StringWithAggregatesFilter<"Question"> | string
    options?: StringNullableListFilter<"Question">
    answerIndex?: IntWithAggregatesFilter<"Question"> | number
    category?: StringWithAggregatesFilter<"Question"> | string
    difficulty?: StringWithAggregatesFilter<"Question"> | string
    explanation?: StringNullableWithAggregatesFilter<"Question"> | string | null
    isActive?: BoolWithAggregatesFilter<"Question"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    type?: StringFilter<"Match"> | string
    status?: StringFilter<"Match"> | string
    player1Id?: StringFilter<"Match"> | string
    player2Id?: StringNullableFilter<"Match"> | string | null
    winnerId?: StringNullableFilter<"Match"> | string | null
    player1Score?: IntFilter<"Match"> | number
    player2Score?: IntFilter<"Match"> | number
    player1Finished?: BoolFilter<"Match"> | boolean
    player2Finished?: BoolFilter<"Match"> | boolean
    coinStake?: IntFilter<"Match"> | number
    questionIds?: StringNullableListFilter<"Match">
    tournamentId?: StringNullableFilter<"Match"> | string | null
    roundNumber?: IntNullableFilter<"Match"> | number | null
    startedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    player1?: XOR<UserScalarRelationFilter, UserWhereInput>
    player2?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    tournament?: XOR<TournamentNullableScalarRelationFilter, TournamentWhereInput> | null
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
    player1Score?: SortOrder
    player2Score?: SortOrder
    player1Finished?: SortOrder
    player2Finished?: SortOrder
    coinStake?: SortOrder
    questionIds?: SortOrder
    tournamentId?: SortOrder
    roundNumber?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    player1?: UserOrderByWithRelationInput
    player2?: UserOrderByWithRelationInput
    tournament?: TournamentOrderByWithRelationInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    type?: StringFilter<"Match"> | string
    status?: StringFilter<"Match"> | string
    player1Id?: StringFilter<"Match"> | string
    player2Id?: StringNullableFilter<"Match"> | string | null
    winnerId?: StringNullableFilter<"Match"> | string | null
    player1Score?: IntFilter<"Match"> | number
    player2Score?: IntFilter<"Match"> | number
    player1Finished?: BoolFilter<"Match"> | boolean
    player2Finished?: BoolFilter<"Match"> | boolean
    coinStake?: IntFilter<"Match"> | number
    questionIds?: StringNullableListFilter<"Match">
    tournamentId?: StringNullableFilter<"Match"> | string | null
    roundNumber?: IntNullableFilter<"Match"> | number | null
    startedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    player1?: XOR<UserScalarRelationFilter, UserWhereInput>
    player2?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    tournament?: XOR<TournamentNullableScalarRelationFilter, TournamentWhereInput> | null
  }, "id">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
    player1Score?: SortOrder
    player2Score?: SortOrder
    player1Finished?: SortOrder
    player2Finished?: SortOrder
    coinStake?: SortOrder
    questionIds?: SortOrder
    tournamentId?: SortOrder
    roundNumber?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    _count?: MatchCountOrderByAggregateInput
    _avg?: MatchAvgOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
    _sum?: MatchSumOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    type?: StringWithAggregatesFilter<"Match"> | string
    status?: StringWithAggregatesFilter<"Match"> | string
    player1Id?: StringWithAggregatesFilter<"Match"> | string
    player2Id?: StringNullableWithAggregatesFilter<"Match"> | string | null
    winnerId?: StringNullableWithAggregatesFilter<"Match"> | string | null
    player1Score?: IntWithAggregatesFilter<"Match"> | number
    player2Score?: IntWithAggregatesFilter<"Match"> | number
    player1Finished?: BoolWithAggregatesFilter<"Match"> | boolean
    player2Finished?: BoolWithAggregatesFilter<"Match"> | boolean
    coinStake?: IntWithAggregatesFilter<"Match"> | number
    questionIds?: StringNullableListFilter<"Match">
    tournamentId?: StringNullableWithAggregatesFilter<"Match"> | string | null
    roundNumber?: IntNullableWithAggregatesFilter<"Match"> | number | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"Match"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Match"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
  }

  export type TournamentWhereInput = {
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    id?: StringFilter<"Tournament"> | string
    name?: StringFilter<"Tournament"> | string
    description?: StringNullableFilter<"Tournament"> | string | null
    entryFee?: IntFilter<"Tournament"> | number
    prizePool?: IntFilter<"Tournament"> | number
    maxPlayers?: IntFilter<"Tournament"> | number
    status?: StringFilter<"Tournament"> | string
    bracket?: JsonNullableFilter<"Tournament">
    winnerId?: StringNullableFilter<"Tournament"> | string | null
    startedAt?: DateTimeNullableFilter<"Tournament"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Tournament"> | Date | string | null
    createdAt?: DateTimeFilter<"Tournament"> | Date | string
    entries?: TournamentEntryListRelationFilter
    matches?: MatchListRelationFilter
  }

  export type TournamentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    entryFee?: SortOrder
    prizePool?: SortOrder
    maxPlayers?: SortOrder
    status?: SortOrder
    bracket?: SortOrder
    winnerId?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    entries?: TournamentEntryOrderByRelationAggregateInput
    matches?: MatchOrderByRelationAggregateInput
  }

  export type TournamentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    name?: StringFilter<"Tournament"> | string
    description?: StringNullableFilter<"Tournament"> | string | null
    entryFee?: IntFilter<"Tournament"> | number
    prizePool?: IntFilter<"Tournament"> | number
    maxPlayers?: IntFilter<"Tournament"> | number
    status?: StringFilter<"Tournament"> | string
    bracket?: JsonNullableFilter<"Tournament">
    winnerId?: StringNullableFilter<"Tournament"> | string | null
    startedAt?: DateTimeNullableFilter<"Tournament"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Tournament"> | Date | string | null
    createdAt?: DateTimeFilter<"Tournament"> | Date | string
    entries?: TournamentEntryListRelationFilter
    matches?: MatchListRelationFilter
  }, "id">

  export type TournamentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    entryFee?: SortOrder
    prizePool?: SortOrder
    maxPlayers?: SortOrder
    status?: SortOrder
    bracket?: SortOrder
    winnerId?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    _count?: TournamentCountOrderByAggregateInput
    _avg?: TournamentAvgOrderByAggregateInput
    _max?: TournamentMaxOrderByAggregateInput
    _min?: TournamentMinOrderByAggregateInput
    _sum?: TournamentSumOrderByAggregateInput
  }

  export type TournamentScalarWhereWithAggregatesInput = {
    AND?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    OR?: TournamentScalarWhereWithAggregatesInput[]
    NOT?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tournament"> | string
    name?: StringWithAggregatesFilter<"Tournament"> | string
    description?: StringNullableWithAggregatesFilter<"Tournament"> | string | null
    entryFee?: IntWithAggregatesFilter<"Tournament"> | number
    prizePool?: IntWithAggregatesFilter<"Tournament"> | number
    maxPlayers?: IntWithAggregatesFilter<"Tournament"> | number
    status?: StringWithAggregatesFilter<"Tournament"> | string
    bracket?: JsonNullableWithAggregatesFilter<"Tournament">
    winnerId?: StringNullableWithAggregatesFilter<"Tournament"> | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"Tournament"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Tournament"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
  }

  export type TournamentEntryWhereInput = {
    AND?: TournamentEntryWhereInput | TournamentEntryWhereInput[]
    OR?: TournamentEntryWhereInput[]
    NOT?: TournamentEntryWhereInput | TournamentEntryWhereInput[]
    id?: StringFilter<"TournamentEntry"> | string
    tournamentId?: StringFilter<"TournamentEntry"> | string
    userId?: StringFilter<"TournamentEntry"> | string
    joinedAt?: DateTimeFilter<"TournamentEntry"> | Date | string
    eliminated?: BoolFilter<"TournamentEntry"> | boolean
    placement?: IntNullableFilter<"TournamentEntry"> | number | null
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TournamentEntryOrderByWithRelationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    eliminated?: SortOrder
    placement?: SortOrder
    tournament?: TournamentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TournamentEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tournamentId_userId?: TournamentEntryTournamentIdUserIdCompoundUniqueInput
    AND?: TournamentEntryWhereInput | TournamentEntryWhereInput[]
    OR?: TournamentEntryWhereInput[]
    NOT?: TournamentEntryWhereInput | TournamentEntryWhereInput[]
    tournamentId?: StringFilter<"TournamentEntry"> | string
    userId?: StringFilter<"TournamentEntry"> | string
    joinedAt?: DateTimeFilter<"TournamentEntry"> | Date | string
    eliminated?: BoolFilter<"TournamentEntry"> | boolean
    placement?: IntNullableFilter<"TournamentEntry"> | number | null
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "tournamentId_userId">

  export type TournamentEntryOrderByWithAggregationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    eliminated?: SortOrder
    placement?: SortOrder
    _count?: TournamentEntryCountOrderByAggregateInput
    _avg?: TournamentEntryAvgOrderByAggregateInput
    _max?: TournamentEntryMaxOrderByAggregateInput
    _min?: TournamentEntryMinOrderByAggregateInput
    _sum?: TournamentEntrySumOrderByAggregateInput
  }

  export type TournamentEntryScalarWhereWithAggregatesInput = {
    AND?: TournamentEntryScalarWhereWithAggregatesInput | TournamentEntryScalarWhereWithAggregatesInput[]
    OR?: TournamentEntryScalarWhereWithAggregatesInput[]
    NOT?: TournamentEntryScalarWhereWithAggregatesInput | TournamentEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TournamentEntry"> | string
    tournamentId?: StringWithAggregatesFilter<"TournamentEntry"> | string
    userId?: StringWithAggregatesFilter<"TournamentEntry"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"TournamentEntry"> | Date | string
    eliminated?: BoolWithAggregatesFilter<"TournamentEntry"> | boolean
    placement?: IntNullableWithAggregatesFilter<"TournamentEntry"> | number | null
  }

  export type ShopItemWhereInput = {
    AND?: ShopItemWhereInput | ShopItemWhereInput[]
    OR?: ShopItemWhereInput[]
    NOT?: ShopItemWhereInput | ShopItemWhereInput[]
    id?: StringFilter<"ShopItem"> | string
    name?: StringFilter<"ShopItem"> | string
    description?: StringNullableFilter<"ShopItem"> | string | null
    type?: StringFilter<"ShopItem"> | string
    imageUrl?: StringNullableFilter<"ShopItem"> | string | null
    cost?: IntFilter<"ShopItem"> | number
    rarity?: StringFilter<"ShopItem"> | string
    isActive?: BoolFilter<"ShopItem"> | boolean
    createdAt?: DateTimeFilter<"ShopItem"> | Date | string
  }

  export type ShopItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    imageUrl?: SortOrder
    cost?: SortOrder
    rarity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ShopItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShopItemWhereInput | ShopItemWhereInput[]
    OR?: ShopItemWhereInput[]
    NOT?: ShopItemWhereInput | ShopItemWhereInput[]
    name?: StringFilter<"ShopItem"> | string
    description?: StringNullableFilter<"ShopItem"> | string | null
    type?: StringFilter<"ShopItem"> | string
    imageUrl?: StringNullableFilter<"ShopItem"> | string | null
    cost?: IntFilter<"ShopItem"> | number
    rarity?: StringFilter<"ShopItem"> | string
    isActive?: BoolFilter<"ShopItem"> | boolean
    createdAt?: DateTimeFilter<"ShopItem"> | Date | string
  }, "id">

  export type ShopItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    imageUrl?: SortOrder
    cost?: SortOrder
    rarity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: ShopItemCountOrderByAggregateInput
    _avg?: ShopItemAvgOrderByAggregateInput
    _max?: ShopItemMaxOrderByAggregateInput
    _min?: ShopItemMinOrderByAggregateInput
    _sum?: ShopItemSumOrderByAggregateInput
  }

  export type ShopItemScalarWhereWithAggregatesInput = {
    AND?: ShopItemScalarWhereWithAggregatesInput | ShopItemScalarWhereWithAggregatesInput[]
    OR?: ShopItemScalarWhereWithAggregatesInput[]
    NOT?: ShopItemScalarWhereWithAggregatesInput | ShopItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShopItem"> | string
    name?: StringWithAggregatesFilter<"ShopItem"> | string
    description?: StringNullableWithAggregatesFilter<"ShopItem"> | string | null
    type?: StringWithAggregatesFilter<"ShopItem"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"ShopItem"> | string | null
    cost?: IntWithAggregatesFilter<"ShopItem"> | number
    rarity?: StringWithAggregatesFilter<"ShopItem"> | string
    isActive?: BoolWithAggregatesFilter<"ShopItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ShopItem"> | Date | string
  }

  export type PurchaseWhereInput = {
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    id?: StringFilter<"Purchase"> | string
    userId?: StringFilter<"Purchase"> | string
    itemId?: StringFilter<"Purchase"> | string
    purchasedAt?: DateTimeFilter<"Purchase"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    purchasedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    userId?: StringFilter<"Purchase"> | string
    itemId?: StringFilter<"Purchase"> | string
    purchasedAt?: DateTimeFilter<"Purchase"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    purchasedAt?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    OR?: PurchaseScalarWhereWithAggregatesInput[]
    NOT?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Purchase"> | string
    userId?: StringWithAggregatesFilter<"Purchase"> | string
    itemId?: StringWithAggregatesFilter<"Purchase"> | string
    purchasedAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
  }

  export type DailyQuizCompletionWhereInput = {
    AND?: DailyQuizCompletionWhereInput | DailyQuizCompletionWhereInput[]
    OR?: DailyQuizCompletionWhereInput[]
    NOT?: DailyQuizCompletionWhereInput | DailyQuizCompletionWhereInput[]
    id?: StringFilter<"DailyQuizCompletion"> | string
    userId?: StringFilter<"DailyQuizCompletion"> | string
    date?: StringFilter<"DailyQuizCompletion"> | string
    score?: IntFilter<"DailyQuizCompletion"> | number
    totalQ?: IntFilter<"DailyQuizCompletion"> | number
    coinsEarned?: IntFilter<"DailyQuizCompletion"> | number
    xpEarned?: IntFilter<"DailyQuizCompletion"> | number
    completedAt?: DateTimeFilter<"DailyQuizCompletion"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DailyQuizCompletionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    score?: SortOrder
    totalQ?: SortOrder
    coinsEarned?: SortOrder
    xpEarned?: SortOrder
    completedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DailyQuizCompletionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: DailyQuizCompletionUserIdDateCompoundUniqueInput
    AND?: DailyQuizCompletionWhereInput | DailyQuizCompletionWhereInput[]
    OR?: DailyQuizCompletionWhereInput[]
    NOT?: DailyQuizCompletionWhereInput | DailyQuizCompletionWhereInput[]
    userId?: StringFilter<"DailyQuizCompletion"> | string
    date?: StringFilter<"DailyQuizCompletion"> | string
    score?: IntFilter<"DailyQuizCompletion"> | number
    totalQ?: IntFilter<"DailyQuizCompletion"> | number
    coinsEarned?: IntFilter<"DailyQuizCompletion"> | number
    xpEarned?: IntFilter<"DailyQuizCompletion"> | number
    completedAt?: DateTimeFilter<"DailyQuizCompletion"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type DailyQuizCompletionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    score?: SortOrder
    totalQ?: SortOrder
    coinsEarned?: SortOrder
    xpEarned?: SortOrder
    completedAt?: SortOrder
    _count?: DailyQuizCompletionCountOrderByAggregateInput
    _avg?: DailyQuizCompletionAvgOrderByAggregateInput
    _max?: DailyQuizCompletionMaxOrderByAggregateInput
    _min?: DailyQuizCompletionMinOrderByAggregateInput
    _sum?: DailyQuizCompletionSumOrderByAggregateInput
  }

  export type DailyQuizCompletionScalarWhereWithAggregatesInput = {
    AND?: DailyQuizCompletionScalarWhereWithAggregatesInput | DailyQuizCompletionScalarWhereWithAggregatesInput[]
    OR?: DailyQuizCompletionScalarWhereWithAggregatesInput[]
    NOT?: DailyQuizCompletionScalarWhereWithAggregatesInput | DailyQuizCompletionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyQuizCompletion"> | string
    userId?: StringWithAggregatesFilter<"DailyQuizCompletion"> | string
    date?: StringWithAggregatesFilter<"DailyQuizCompletion"> | string
    score?: IntWithAggregatesFilter<"DailyQuizCompletion"> | number
    totalQ?: IntWithAggregatesFilter<"DailyQuizCompletion"> | number
    coinsEarned?: IntWithAggregatesFilter<"DailyQuizCompletion"> | number
    xpEarned?: IntWithAggregatesFilter<"DailyQuizCompletion"> | number
    completedAt?: DateTimeWithAggregatesFilter<"DailyQuizCompletion"> | Date | string
  }

  export type WeeklyStatsWhereInput = {
    AND?: WeeklyStatsWhereInput | WeeklyStatsWhereInput[]
    OR?: WeeklyStatsWhereInput[]
    NOT?: WeeklyStatsWhereInput | WeeklyStatsWhereInput[]
    id?: StringFilter<"WeeklyStats"> | string
    userId?: StringFilter<"WeeklyStats"> | string
    weekStart?: StringFilter<"WeeklyStats"> | string
    wins?: IntFilter<"WeeklyStats"> | number
    matches?: IntFilter<"WeeklyStats"> | number
    points?: IntFilter<"WeeklyStats"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WeeklyStatsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    wins?: SortOrder
    matches?: SortOrder
    points?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WeeklyStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_weekStart?: WeeklyStatsUserIdWeekStartCompoundUniqueInput
    AND?: WeeklyStatsWhereInput | WeeklyStatsWhereInput[]
    OR?: WeeklyStatsWhereInput[]
    NOT?: WeeklyStatsWhereInput | WeeklyStatsWhereInput[]
    userId?: StringFilter<"WeeklyStats"> | string
    weekStart?: StringFilter<"WeeklyStats"> | string
    wins?: IntFilter<"WeeklyStats"> | number
    matches?: IntFilter<"WeeklyStats"> | number
    points?: IntFilter<"WeeklyStats"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_weekStart">

  export type WeeklyStatsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    wins?: SortOrder
    matches?: SortOrder
    points?: SortOrder
    _count?: WeeklyStatsCountOrderByAggregateInput
    _avg?: WeeklyStatsAvgOrderByAggregateInput
    _max?: WeeklyStatsMaxOrderByAggregateInput
    _min?: WeeklyStatsMinOrderByAggregateInput
    _sum?: WeeklyStatsSumOrderByAggregateInput
  }

  export type WeeklyStatsScalarWhereWithAggregatesInput = {
    AND?: WeeklyStatsScalarWhereWithAggregatesInput | WeeklyStatsScalarWhereWithAggregatesInput[]
    OR?: WeeklyStatsScalarWhereWithAggregatesInput[]
    NOT?: WeeklyStatsScalarWhereWithAggregatesInput | WeeklyStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WeeklyStats"> | string
    userId?: StringWithAggregatesFilter<"WeeklyStats"> | string
    weekStart?: StringWithAggregatesFilter<"WeeklyStats"> | string
    wins?: IntWithAggregatesFilter<"WeeklyStats"> | number
    matches?: IntWithAggregatesFilter<"WeeklyStats"> | number
    points?: IntWithAggregatesFilter<"WeeklyStats"> | number
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type GeneralProgressWhereInput = {
    AND?: GeneralProgressWhereInput | GeneralProgressWhereInput[]
    OR?: GeneralProgressWhereInput[]
    NOT?: GeneralProgressWhereInput | GeneralProgressWhereInput[]
    id?: StringFilter<"GeneralProgress"> | string
    userId?: StringFilter<"GeneralProgress"> | string
    category?: StringFilter<"GeneralProgress"> | string
    unlockedLevel?: IntFilter<"GeneralProgress"> | number
    updatedAt?: DateTimeFilter<"GeneralProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GeneralProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    unlockedLevel?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GeneralProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_category?: GeneralProgressUserIdCategoryCompoundUniqueInput
    AND?: GeneralProgressWhereInput | GeneralProgressWhereInput[]
    OR?: GeneralProgressWhereInput[]
    NOT?: GeneralProgressWhereInput | GeneralProgressWhereInput[]
    userId?: StringFilter<"GeneralProgress"> | string
    category?: StringFilter<"GeneralProgress"> | string
    unlockedLevel?: IntFilter<"GeneralProgress"> | number
    updatedAt?: DateTimeFilter<"GeneralProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_category">

  export type GeneralProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    unlockedLevel?: SortOrder
    updatedAt?: SortOrder
    _count?: GeneralProgressCountOrderByAggregateInput
    _avg?: GeneralProgressAvgOrderByAggregateInput
    _max?: GeneralProgressMaxOrderByAggregateInput
    _min?: GeneralProgressMinOrderByAggregateInput
    _sum?: GeneralProgressSumOrderByAggregateInput
  }

  export type GeneralProgressScalarWhereWithAggregatesInput = {
    AND?: GeneralProgressScalarWhereWithAggregatesInput | GeneralProgressScalarWhereWithAggregatesInput[]
    OR?: GeneralProgressScalarWhereWithAggregatesInput[]
    NOT?: GeneralProgressScalarWhereWithAggregatesInput | GeneralProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GeneralProgress"> | string
    userId?: StringWithAggregatesFilter<"GeneralProgress"> | string
    category?: StringWithAggregatesFilter<"GeneralProgress"> | string
    unlockedLevel?: IntWithAggregatesFilter<"GeneralProgress"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"GeneralProgress"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsP1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsP2?: MatchCreateNestedManyWithoutPlayer2Input
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    weeklyStats?: WeeklyStatsCreateNestedManyWithoutUserInput
    dailyCompletions?: DailyQuizCompletionCreateNestedManyWithoutUserInput
    tournamentEntries?: TournamentEntryCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    generalProgress?: GeneralProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsP1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsP2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    weeklyStats?: WeeklyStatsUncheckedCreateNestedManyWithoutUserInput
    dailyCompletions?: DailyQuizCompletionUncheckedCreateNestedManyWithoutUserInput
    tournamentEntries?: TournamentEntryUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    generalProgress?: GeneralProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsP1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsP2?: MatchUpdateManyWithoutPlayer2NestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    weeklyStats?: WeeklyStatsUpdateManyWithoutUserNestedInput
    dailyCompletions?: DailyQuizCompletionUpdateManyWithoutUserNestedInput
    tournamentEntries?: TournamentEntryUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    generalProgress?: GeneralProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsP1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsP2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    weeklyStats?: WeeklyStatsUncheckedUpdateManyWithoutUserNestedInput
    dailyCompletions?: DailyQuizCompletionUncheckedUpdateManyWithoutUserNestedInput
    tournamentEntries?: TournamentEntryUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    generalProgress?: GeneralProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    text: string
    options?: QuestionCreateoptionsInput | string[]
    answerIndex: number
    category: string
    difficulty: string
    explanation?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    text: string
    options?: QuestionCreateoptionsInput | string[]
    answerIndex: number
    category: string
    difficulty: string
    explanation?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type QuestionUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    answerIndex?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    answerIndex?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyInput = {
    id?: string
    text: string
    options?: QuestionCreateoptionsInput | string[]
    answerIndex: number
    category: string
    difficulty: string
    explanation?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    answerIndex?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    text?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    answerIndex?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateInput = {
    id?: string
    type: string
    status?: string
    winnerId?: string | null
    player1Score?: number
    player2Score?: number
    player1Finished?: boolean
    player2Finished?: boolean
    coinStake?: number
    questionIds?: MatchCreatequestionIdsInput | string[]
    roundNumber?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    player1: UserCreateNestedOneWithoutMatchesAsP1Input
    player2?: UserCreateNestedOneWithoutMatchesAsP2Input
    tournament?: TournamentCreateNestedOneWithoutMatchesInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    type: string
    status?: string
    player1Id: string
    player2Id?: string | null
    winnerId?: string | null
    player1Score?: number
    player2Score?: number
    player1Finished?: boolean
    player2Finished?: boolean
    coinStake?: number
    questionIds?: MatchCreatequestionIdsInput | string[]
    tournamentId?: string | null
    roundNumber?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MatchUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Finished?: BoolFieldUpdateOperationsInput | boolean
    player2Finished?: BoolFieldUpdateOperationsInput | boolean
    coinStake?: IntFieldUpdateOperationsInput | number
    questionIds?: MatchUpdatequestionIdsInput | string[]
    roundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutMatchesAsP1NestedInput
    player2?: UserUpdateOneWithoutMatchesAsP2NestedInput
    tournament?: TournamentUpdateOneWithoutMatchesNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: NullableStringFieldUpdateOperationsInput | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Finished?: BoolFieldUpdateOperationsInput | boolean
    player2Finished?: BoolFieldUpdateOperationsInput | boolean
    coinStake?: IntFieldUpdateOperationsInput | number
    questionIds?: MatchUpdatequestionIdsInput | string[]
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
    roundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateManyInput = {
    id?: string
    type: string
    status?: string
    player1Id: string
    player2Id?: string | null
    winnerId?: string | null
    player1Score?: number
    player2Score?: number
    player1Finished?: boolean
    player2Finished?: boolean
    coinStake?: number
    questionIds?: MatchCreatequestionIdsInput | string[]
    tournamentId?: string | null
    roundNumber?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MatchUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Finished?: BoolFieldUpdateOperationsInput | boolean
    player2Finished?: BoolFieldUpdateOperationsInput | boolean
    coinStake?: IntFieldUpdateOperationsInput | number
    questionIds?: MatchUpdatequestionIdsInput | string[]
    roundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyInput = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: NullableStringFieldUpdateOperationsInput | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Finished?: BoolFieldUpdateOperationsInput | boolean
    player2Finished?: BoolFieldUpdateOperationsInput | boolean
    coinStake?: IntFieldUpdateOperationsInput | number
    questionIds?: MatchUpdatequestionIdsInput | string[]
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
    roundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentCreateInput = {
    id?: string
    name: string
    description?: string | null
    entryFee?: number
    prizePool?: number
    maxPlayers?: number
    status?: string
    bracket?: InputJsonValue | null
    winnerId?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    entries?: TournamentEntryCreateNestedManyWithoutTournamentInput
    matches?: MatchCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    entryFee?: number
    prizePool?: number
    maxPlayers?: number
    status?: string
    bracket?: InputJsonValue | null
    winnerId?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    entries?: TournamentEntryUncheckedCreateNestedManyWithoutTournamentInput
    matches?: MatchUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryFee?: IntFieldUpdateOperationsInput | number
    prizePool?: IntFieldUpdateOperationsInput | number
    maxPlayers?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    bracket?: InputJsonValue | InputJsonValue | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: TournamentEntryUpdateManyWithoutTournamentNestedInput
    matches?: MatchUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryFee?: IntFieldUpdateOperationsInput | number
    prizePool?: IntFieldUpdateOperationsInput | number
    maxPlayers?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    bracket?: InputJsonValue | InputJsonValue | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: TournamentEntryUncheckedUpdateManyWithoutTournamentNestedInput
    matches?: MatchUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    entryFee?: number
    prizePool?: number
    maxPlayers?: number
    status?: string
    bracket?: InputJsonValue | null
    winnerId?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TournamentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryFee?: IntFieldUpdateOperationsInput | number
    prizePool?: IntFieldUpdateOperationsInput | number
    maxPlayers?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    bracket?: InputJsonValue | InputJsonValue | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryFee?: IntFieldUpdateOperationsInput | number
    prizePool?: IntFieldUpdateOperationsInput | number
    maxPlayers?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    bracket?: InputJsonValue | InputJsonValue | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentEntryCreateInput = {
    id?: string
    joinedAt?: Date | string
    eliminated?: boolean
    placement?: number | null
    tournament: TournamentCreateNestedOneWithoutEntriesInput
    user: UserCreateNestedOneWithoutTournamentEntriesInput
  }

  export type TournamentEntryUncheckedCreateInput = {
    id?: string
    tournamentId: string
    userId: string
    joinedAt?: Date | string
    eliminated?: boolean
    placement?: number | null
  }

  export type TournamentEntryUpdateInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminated?: BoolFieldUpdateOperationsInput | boolean
    placement?: NullableIntFieldUpdateOperationsInput | number | null
    tournament?: TournamentUpdateOneRequiredWithoutEntriesNestedInput
    user?: UserUpdateOneRequiredWithoutTournamentEntriesNestedInput
  }

  export type TournamentEntryUncheckedUpdateInput = {
    tournamentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminated?: BoolFieldUpdateOperationsInput | boolean
    placement?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TournamentEntryCreateManyInput = {
    id?: string
    tournamentId: string
    userId: string
    joinedAt?: Date | string
    eliminated?: boolean
    placement?: number | null
  }

  export type TournamentEntryUpdateManyMutationInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminated?: BoolFieldUpdateOperationsInput | boolean
    placement?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TournamentEntryUncheckedUpdateManyInput = {
    tournamentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminated?: BoolFieldUpdateOperationsInput | boolean
    placement?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ShopItemCreateInput = {
    id?: string
    name: string
    description?: string | null
    type: string
    imageUrl?: string | null
    cost: number
    rarity?: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ShopItemUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    type: string
    imageUrl?: string | null
    cost: number
    rarity?: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ShopItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: IntFieldUpdateOperationsInput | number
    rarity?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopItemUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: IntFieldUpdateOperationsInput | number
    rarity?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopItemCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    type: string
    imageUrl?: string | null
    cost: number
    rarity?: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ShopItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: IntFieldUpdateOperationsInput | number
    rarity?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopItemUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: IntFieldUpdateOperationsInput | number
    rarity?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateInput = {
    id?: string
    itemId: string
    purchasedAt?: Date | string
    user: UserCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateInput = {
    id?: string
    userId: string
    itemId: string
    purchasedAt?: Date | string
  }

  export type PurchaseUpdateInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateManyInput = {
    id?: string
    userId: string
    itemId: string
    purchasedAt?: Date | string
  }

  export type PurchaseUpdateManyMutationInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyQuizCompletionCreateInput = {
    id?: string
    date: string
    score: number
    totalQ?: number
    coinsEarned?: number
    xpEarned?: number
    completedAt?: Date | string
    user: UserCreateNestedOneWithoutDailyCompletionsInput
  }

  export type DailyQuizCompletionUncheckedCreateInput = {
    id?: string
    userId: string
    date: string
    score: number
    totalQ?: number
    coinsEarned?: number
    xpEarned?: number
    completedAt?: Date | string
  }

  export type DailyQuizCompletionUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    totalQ?: IntFieldUpdateOperationsInput | number
    coinsEarned?: IntFieldUpdateOperationsInput | number
    xpEarned?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyCompletionsNestedInput
  }

  export type DailyQuizCompletionUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    totalQ?: IntFieldUpdateOperationsInput | number
    coinsEarned?: IntFieldUpdateOperationsInput | number
    xpEarned?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyQuizCompletionCreateManyInput = {
    id?: string
    userId: string
    date: string
    score: number
    totalQ?: number
    coinsEarned?: number
    xpEarned?: number
    completedAt?: Date | string
  }

  export type DailyQuizCompletionUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    totalQ?: IntFieldUpdateOperationsInput | number
    coinsEarned?: IntFieldUpdateOperationsInput | number
    xpEarned?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyQuizCompletionUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    totalQ?: IntFieldUpdateOperationsInput | number
    coinsEarned?: IntFieldUpdateOperationsInput | number
    xpEarned?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyStatsCreateInput = {
    id?: string
    weekStart: string
    wins?: number
    matches?: number
    points?: number
    user: UserCreateNestedOneWithoutWeeklyStatsInput
  }

  export type WeeklyStatsUncheckedCreateInput = {
    id?: string
    userId: string
    weekStart: string
    wins?: number
    matches?: number
    points?: number
  }

  export type WeeklyStatsUpdateInput = {
    weekStart?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutWeeklyStatsNestedInput
  }

  export type WeeklyStatsUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    weekStart?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklyStatsCreateManyInput = {
    id?: string
    userId: string
    weekStart: string
    wins?: number
    matches?: number
    points?: number
  }

  export type WeeklyStatsUpdateManyMutationInput = {
    weekStart?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklyStatsUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    weekStart?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    message: string
    type: string
    read?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    message: string
    type: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    title: string
    message: string
    type: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneralProgressCreateInput = {
    id?: string
    category: string
    unlockedLevel?: number
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGeneralProgressInput
  }

  export type GeneralProgressUncheckedCreateInput = {
    id?: string
    userId: string
    category: string
    unlockedLevel?: number
    updatedAt?: Date | string
  }

  export type GeneralProgressUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    unlockedLevel?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGeneralProgressNestedInput
  }

  export type GeneralProgressUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unlockedLevel?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneralProgressCreateManyInput = {
    id?: string
    userId: string
    category: string
    unlockedLevel?: number
    updatedAt?: Date | string
  }

  export type GeneralProgressUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    unlockedLevel?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneralProgressUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unlockedLevel?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    isSet?: boolean
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
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

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type PurchaseListRelationFilter = {
    every?: PurchaseWhereInput
    some?: PurchaseWhereInput
    none?: PurchaseWhereInput
  }

  export type WeeklyStatsListRelationFilter = {
    every?: WeeklyStatsWhereInput
    some?: WeeklyStatsWhereInput
    none?: WeeklyStatsWhereInput
  }

  export type DailyQuizCompletionListRelationFilter = {
    every?: DailyQuizCompletionWhereInput
    some?: DailyQuizCompletionWhereInput
    none?: DailyQuizCompletionWhereInput
  }

  export type TournamentEntryListRelationFilter = {
    every?: TournamentEntryWhereInput
    some?: TournamentEntryWhereInput
    none?: TournamentEntryWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type GeneralProgressListRelationFilter = {
    every?: GeneralProgressWhereInput
    some?: GeneralProgressWhereInput
    none?: GeneralProgressWhereInput
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeeklyStatsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyQuizCompletionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TournamentEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GeneralProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrder
    avatarFrameId?: SortOrder
    bio?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    coins?: SortOrder
    rankedPoints?: SortOrder
    totalWins?: SortOrder
    totalMatches?: SortOrder
    longestStreak?: SortOrder
    loginStreak?: SortOrder
    lastLoginDate?: SortOrder
    lastSpinDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    level?: SortOrder
    xp?: SortOrder
    coins?: SortOrder
    rankedPoints?: SortOrder
    totalWins?: SortOrder
    totalMatches?: SortOrder
    longestStreak?: SortOrder
    loginStreak?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrder
    avatarFrameId?: SortOrder
    bio?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    coins?: SortOrder
    rankedPoints?: SortOrder
    totalWins?: SortOrder
    totalMatches?: SortOrder
    longestStreak?: SortOrder
    loginStreak?: SortOrder
    lastLoginDate?: SortOrder
    lastSpinDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrder
    avatarFrameId?: SortOrder
    bio?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    coins?: SortOrder
    rankedPoints?: SortOrder
    totalWins?: SortOrder
    totalMatches?: SortOrder
    longestStreak?: SortOrder
    loginStreak?: SortOrder
    lastLoginDate?: SortOrder
    lastSpinDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    level?: SortOrder
    xp?: SortOrder
    coins?: SortOrder
    rankedPoints?: SortOrder
    totalWins?: SortOrder
    totalMatches?: SortOrder
    longestStreak?: SortOrder
    loginStreak?: SortOrder
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
    isSet?: boolean
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    options?: SortOrder
    answerIndex?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    explanation?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    answerIndex?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    answerIndex?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    explanation?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    answerIndex?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    explanation?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    answerIndex?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TournamentNullableScalarRelationFilter = {
    is?: TournamentWhereInput | null
    isNot?: TournamentWhereInput | null
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
    player1Score?: SortOrder
    player2Score?: SortOrder
    player1Finished?: SortOrder
    player2Finished?: SortOrder
    coinStake?: SortOrder
    questionIds?: SortOrder
    tournamentId?: SortOrder
    roundNumber?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchAvgOrderByAggregateInput = {
    player1Score?: SortOrder
    player2Score?: SortOrder
    coinStake?: SortOrder
    roundNumber?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
    player1Score?: SortOrder
    player2Score?: SortOrder
    player1Finished?: SortOrder
    player2Finished?: SortOrder
    coinStake?: SortOrder
    tournamentId?: SortOrder
    roundNumber?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
    player1Score?: SortOrder
    player2Score?: SortOrder
    player1Finished?: SortOrder
    player2Finished?: SortOrder
    coinStake?: SortOrder
    tournamentId?: SortOrder
    roundNumber?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchSumOrderByAggregateInput = {
    player1Score?: SortOrder
    player2Score?: SortOrder
    coinStake?: SortOrder
    roundNumber?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type TournamentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    entryFee?: SortOrder
    prizePool?: SortOrder
    maxPlayers?: SortOrder
    status?: SortOrder
    bracket?: SortOrder
    winnerId?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TournamentAvgOrderByAggregateInput = {
    entryFee?: SortOrder
    prizePool?: SortOrder
    maxPlayers?: SortOrder
  }

  export type TournamentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    entryFee?: SortOrder
    prizePool?: SortOrder
    maxPlayers?: SortOrder
    status?: SortOrder
    winnerId?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TournamentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    entryFee?: SortOrder
    prizePool?: SortOrder
    maxPlayers?: SortOrder
    status?: SortOrder
    winnerId?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TournamentSumOrderByAggregateInput = {
    entryFee?: SortOrder
    prizePool?: SortOrder
    maxPlayers?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type TournamentScalarRelationFilter = {
    is?: TournamentWhereInput
    isNot?: TournamentWhereInput
  }

  export type TournamentEntryTournamentIdUserIdCompoundUniqueInput = {
    tournamentId: string
    userId: string
  }

  export type TournamentEntryCountOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    eliminated?: SortOrder
    placement?: SortOrder
  }

  export type TournamentEntryAvgOrderByAggregateInput = {
    placement?: SortOrder
  }

  export type TournamentEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    eliminated?: SortOrder
    placement?: SortOrder
  }

  export type TournamentEntryMinOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    eliminated?: SortOrder
    placement?: SortOrder
  }

  export type TournamentEntrySumOrderByAggregateInput = {
    placement?: SortOrder
  }

  export type ShopItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    imageUrl?: SortOrder
    cost?: SortOrder
    rarity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ShopItemAvgOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type ShopItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    imageUrl?: SortOrder
    cost?: SortOrder
    rarity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ShopItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    imageUrl?: SortOrder
    cost?: SortOrder
    rarity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ShopItemSumOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    purchasedAt?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    purchasedAt?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    purchasedAt?: SortOrder
  }

  export type DailyQuizCompletionUserIdDateCompoundUniqueInput = {
    userId: string
    date: string
  }

  export type DailyQuizCompletionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    score?: SortOrder
    totalQ?: SortOrder
    coinsEarned?: SortOrder
    xpEarned?: SortOrder
    completedAt?: SortOrder
  }

  export type DailyQuizCompletionAvgOrderByAggregateInput = {
    score?: SortOrder
    totalQ?: SortOrder
    coinsEarned?: SortOrder
    xpEarned?: SortOrder
  }

  export type DailyQuizCompletionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    score?: SortOrder
    totalQ?: SortOrder
    coinsEarned?: SortOrder
    xpEarned?: SortOrder
    completedAt?: SortOrder
  }

  export type DailyQuizCompletionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    score?: SortOrder
    totalQ?: SortOrder
    coinsEarned?: SortOrder
    xpEarned?: SortOrder
    completedAt?: SortOrder
  }

  export type DailyQuizCompletionSumOrderByAggregateInput = {
    score?: SortOrder
    totalQ?: SortOrder
    coinsEarned?: SortOrder
    xpEarned?: SortOrder
  }

  export type WeeklyStatsUserIdWeekStartCompoundUniqueInput = {
    userId: string
    weekStart: string
  }

  export type WeeklyStatsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    wins?: SortOrder
    matches?: SortOrder
    points?: SortOrder
  }

  export type WeeklyStatsAvgOrderByAggregateInput = {
    wins?: SortOrder
    matches?: SortOrder
    points?: SortOrder
  }

  export type WeeklyStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    wins?: SortOrder
    matches?: SortOrder
    points?: SortOrder
  }

  export type WeeklyStatsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    wins?: SortOrder
    matches?: SortOrder
    points?: SortOrder
  }

  export type WeeklyStatsSumOrderByAggregateInput = {
    wins?: SortOrder
    matches?: SortOrder
    points?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type GeneralProgressUserIdCategoryCompoundUniqueInput = {
    userId: string
    category: string
  }

  export type GeneralProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    unlockedLevel?: SortOrder
    updatedAt?: SortOrder
  }

  export type GeneralProgressAvgOrderByAggregateInput = {
    unlockedLevel?: SortOrder
  }

  export type GeneralProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    unlockedLevel?: SortOrder
    updatedAt?: SortOrder
  }

  export type GeneralProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    unlockedLevel?: SortOrder
    updatedAt?: SortOrder
  }

  export type GeneralProgressSumOrderByAggregateInput = {
    unlockedLevel?: SortOrder
  }

  export type MatchCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input> | MatchCreateWithoutPlayer1Input[] | MatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer1Input | MatchCreateOrConnectWithoutPlayer1Input[]
    createMany?: MatchCreateManyPlayer1InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input> | MatchCreateWithoutPlayer2Input[] | MatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer2Input | MatchCreateOrConnectWithoutPlayer2Input[]
    createMany?: MatchCreateManyPlayer2InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type PurchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type WeeklyStatsCreateNestedManyWithoutUserInput = {
    create?: XOR<WeeklyStatsCreateWithoutUserInput, WeeklyStatsUncheckedCreateWithoutUserInput> | WeeklyStatsCreateWithoutUserInput[] | WeeklyStatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyStatsCreateOrConnectWithoutUserInput | WeeklyStatsCreateOrConnectWithoutUserInput[]
    createMany?: WeeklyStatsCreateManyUserInputEnvelope
    connect?: WeeklyStatsWhereUniqueInput | WeeklyStatsWhereUniqueInput[]
  }

  export type DailyQuizCompletionCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyQuizCompletionCreateWithoutUserInput, DailyQuizCompletionUncheckedCreateWithoutUserInput> | DailyQuizCompletionCreateWithoutUserInput[] | DailyQuizCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyQuizCompletionCreateOrConnectWithoutUserInput | DailyQuizCompletionCreateOrConnectWithoutUserInput[]
    createMany?: DailyQuizCompletionCreateManyUserInputEnvelope
    connect?: DailyQuizCompletionWhereUniqueInput | DailyQuizCompletionWhereUniqueInput[]
  }

  export type TournamentEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<TournamentEntryCreateWithoutUserInput, TournamentEntryUncheckedCreateWithoutUserInput> | TournamentEntryCreateWithoutUserInput[] | TournamentEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TournamentEntryCreateOrConnectWithoutUserInput | TournamentEntryCreateOrConnectWithoutUserInput[]
    createMany?: TournamentEntryCreateManyUserInputEnvelope
    connect?: TournamentEntryWhereUniqueInput | TournamentEntryWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type GeneralProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<GeneralProgressCreateWithoutUserInput, GeneralProgressUncheckedCreateWithoutUserInput> | GeneralProgressCreateWithoutUserInput[] | GeneralProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneralProgressCreateOrConnectWithoutUserInput | GeneralProgressCreateOrConnectWithoutUserInput[]
    createMany?: GeneralProgressCreateManyUserInputEnvelope
    connect?: GeneralProgressWhereUniqueInput | GeneralProgressWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input> | MatchCreateWithoutPlayer1Input[] | MatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer1Input | MatchCreateOrConnectWithoutPlayer1Input[]
    createMany?: MatchCreateManyPlayer1InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input> | MatchCreateWithoutPlayer2Input[] | MatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer2Input | MatchCreateOrConnectWithoutPlayer2Input[]
    createMany?: MatchCreateManyPlayer2InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type WeeklyStatsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WeeklyStatsCreateWithoutUserInput, WeeklyStatsUncheckedCreateWithoutUserInput> | WeeklyStatsCreateWithoutUserInput[] | WeeklyStatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyStatsCreateOrConnectWithoutUserInput | WeeklyStatsCreateOrConnectWithoutUserInput[]
    createMany?: WeeklyStatsCreateManyUserInputEnvelope
    connect?: WeeklyStatsWhereUniqueInput | WeeklyStatsWhereUniqueInput[]
  }

  export type DailyQuizCompletionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyQuizCompletionCreateWithoutUserInput, DailyQuizCompletionUncheckedCreateWithoutUserInput> | DailyQuizCompletionCreateWithoutUserInput[] | DailyQuizCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyQuizCompletionCreateOrConnectWithoutUserInput | DailyQuizCompletionCreateOrConnectWithoutUserInput[]
    createMany?: DailyQuizCompletionCreateManyUserInputEnvelope
    connect?: DailyQuizCompletionWhereUniqueInput | DailyQuizCompletionWhereUniqueInput[]
  }

  export type TournamentEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TournamentEntryCreateWithoutUserInput, TournamentEntryUncheckedCreateWithoutUserInput> | TournamentEntryCreateWithoutUserInput[] | TournamentEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TournamentEntryCreateOrConnectWithoutUserInput | TournamentEntryCreateOrConnectWithoutUserInput[]
    createMany?: TournamentEntryCreateManyUserInputEnvelope
    connect?: TournamentEntryWhereUniqueInput | TournamentEntryWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type GeneralProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GeneralProgressCreateWithoutUserInput, GeneralProgressUncheckedCreateWithoutUserInput> | GeneralProgressCreateWithoutUserInput[] | GeneralProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneralProgressCreateOrConnectWithoutUserInput | GeneralProgressCreateOrConnectWithoutUserInput[]
    createMany?: GeneralProgressCreateManyUserInputEnvelope
    connect?: GeneralProgressWhereUniqueInput | GeneralProgressWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MatchUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input> | MatchCreateWithoutPlayer1Input[] | MatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer1Input | MatchCreateOrConnectWithoutPlayer1Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPlayer1Input | MatchUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: MatchCreateManyPlayer1InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPlayer1Input | MatchUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutPlayer1Input | MatchUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input> | MatchCreateWithoutPlayer2Input[] | MatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer2Input | MatchCreateOrConnectWithoutPlayer2Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPlayer2Input | MatchUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: MatchCreateManyPlayer2InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPlayer2Input | MatchUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutPlayer2Input | MatchUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type PurchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutUserInput | PurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutUserInput | PurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutUserInput | PurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type WeeklyStatsUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeeklyStatsCreateWithoutUserInput, WeeklyStatsUncheckedCreateWithoutUserInput> | WeeklyStatsCreateWithoutUserInput[] | WeeklyStatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyStatsCreateOrConnectWithoutUserInput | WeeklyStatsCreateOrConnectWithoutUserInput[]
    upsert?: WeeklyStatsUpsertWithWhereUniqueWithoutUserInput | WeeklyStatsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeeklyStatsCreateManyUserInputEnvelope
    set?: WeeklyStatsWhereUniqueInput | WeeklyStatsWhereUniqueInput[]
    disconnect?: WeeklyStatsWhereUniqueInput | WeeklyStatsWhereUniqueInput[]
    delete?: WeeklyStatsWhereUniqueInput | WeeklyStatsWhereUniqueInput[]
    connect?: WeeklyStatsWhereUniqueInput | WeeklyStatsWhereUniqueInput[]
    update?: WeeklyStatsUpdateWithWhereUniqueWithoutUserInput | WeeklyStatsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeeklyStatsUpdateManyWithWhereWithoutUserInput | WeeklyStatsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeeklyStatsScalarWhereInput | WeeklyStatsScalarWhereInput[]
  }

  export type DailyQuizCompletionUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyQuizCompletionCreateWithoutUserInput, DailyQuizCompletionUncheckedCreateWithoutUserInput> | DailyQuizCompletionCreateWithoutUserInput[] | DailyQuizCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyQuizCompletionCreateOrConnectWithoutUserInput | DailyQuizCompletionCreateOrConnectWithoutUserInput[]
    upsert?: DailyQuizCompletionUpsertWithWhereUniqueWithoutUserInput | DailyQuizCompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyQuizCompletionCreateManyUserInputEnvelope
    set?: DailyQuizCompletionWhereUniqueInput | DailyQuizCompletionWhereUniqueInput[]
    disconnect?: DailyQuizCompletionWhereUniqueInput | DailyQuizCompletionWhereUniqueInput[]
    delete?: DailyQuizCompletionWhereUniqueInput | DailyQuizCompletionWhereUniqueInput[]
    connect?: DailyQuizCompletionWhereUniqueInput | DailyQuizCompletionWhereUniqueInput[]
    update?: DailyQuizCompletionUpdateWithWhereUniqueWithoutUserInput | DailyQuizCompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyQuizCompletionUpdateManyWithWhereWithoutUserInput | DailyQuizCompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyQuizCompletionScalarWhereInput | DailyQuizCompletionScalarWhereInput[]
  }

  export type TournamentEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<TournamentEntryCreateWithoutUserInput, TournamentEntryUncheckedCreateWithoutUserInput> | TournamentEntryCreateWithoutUserInput[] | TournamentEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TournamentEntryCreateOrConnectWithoutUserInput | TournamentEntryCreateOrConnectWithoutUserInput[]
    upsert?: TournamentEntryUpsertWithWhereUniqueWithoutUserInput | TournamentEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TournamentEntryCreateManyUserInputEnvelope
    set?: TournamentEntryWhereUniqueInput | TournamentEntryWhereUniqueInput[]
    disconnect?: TournamentEntryWhereUniqueInput | TournamentEntryWhereUniqueInput[]
    delete?: TournamentEntryWhereUniqueInput | TournamentEntryWhereUniqueInput[]
    connect?: TournamentEntryWhereUniqueInput | TournamentEntryWhereUniqueInput[]
    update?: TournamentEntryUpdateWithWhereUniqueWithoutUserInput | TournamentEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TournamentEntryUpdateManyWithWhereWithoutUserInput | TournamentEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TournamentEntryScalarWhereInput | TournamentEntryScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type GeneralProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<GeneralProgressCreateWithoutUserInput, GeneralProgressUncheckedCreateWithoutUserInput> | GeneralProgressCreateWithoutUserInput[] | GeneralProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneralProgressCreateOrConnectWithoutUserInput | GeneralProgressCreateOrConnectWithoutUserInput[]
    upsert?: GeneralProgressUpsertWithWhereUniqueWithoutUserInput | GeneralProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GeneralProgressCreateManyUserInputEnvelope
    set?: GeneralProgressWhereUniqueInput | GeneralProgressWhereUniqueInput[]
    disconnect?: GeneralProgressWhereUniqueInput | GeneralProgressWhereUniqueInput[]
    delete?: GeneralProgressWhereUniqueInput | GeneralProgressWhereUniqueInput[]
    connect?: GeneralProgressWhereUniqueInput | GeneralProgressWhereUniqueInput[]
    update?: GeneralProgressUpdateWithWhereUniqueWithoutUserInput | GeneralProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GeneralProgressUpdateManyWithWhereWithoutUserInput | GeneralProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GeneralProgressScalarWhereInput | GeneralProgressScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input> | MatchCreateWithoutPlayer1Input[] | MatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer1Input | MatchCreateOrConnectWithoutPlayer1Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPlayer1Input | MatchUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: MatchCreateManyPlayer1InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPlayer1Input | MatchUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutPlayer1Input | MatchUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input> | MatchCreateWithoutPlayer2Input[] | MatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer2Input | MatchCreateOrConnectWithoutPlayer2Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPlayer2Input | MatchUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: MatchCreateManyPlayer2InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPlayer2Input | MatchUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutPlayer2Input | MatchUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutUserInput | PurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutUserInput | PurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutUserInput | PurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type WeeklyStatsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeeklyStatsCreateWithoutUserInput, WeeklyStatsUncheckedCreateWithoutUserInput> | WeeklyStatsCreateWithoutUserInput[] | WeeklyStatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyStatsCreateOrConnectWithoutUserInput | WeeklyStatsCreateOrConnectWithoutUserInput[]
    upsert?: WeeklyStatsUpsertWithWhereUniqueWithoutUserInput | WeeklyStatsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeeklyStatsCreateManyUserInputEnvelope
    set?: WeeklyStatsWhereUniqueInput | WeeklyStatsWhereUniqueInput[]
    disconnect?: WeeklyStatsWhereUniqueInput | WeeklyStatsWhereUniqueInput[]
    delete?: WeeklyStatsWhereUniqueInput | WeeklyStatsWhereUniqueInput[]
    connect?: WeeklyStatsWhereUniqueInput | WeeklyStatsWhereUniqueInput[]
    update?: WeeklyStatsUpdateWithWhereUniqueWithoutUserInput | WeeklyStatsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeeklyStatsUpdateManyWithWhereWithoutUserInput | WeeklyStatsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeeklyStatsScalarWhereInput | WeeklyStatsScalarWhereInput[]
  }

  export type DailyQuizCompletionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyQuizCompletionCreateWithoutUserInput, DailyQuizCompletionUncheckedCreateWithoutUserInput> | DailyQuizCompletionCreateWithoutUserInput[] | DailyQuizCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyQuizCompletionCreateOrConnectWithoutUserInput | DailyQuizCompletionCreateOrConnectWithoutUserInput[]
    upsert?: DailyQuizCompletionUpsertWithWhereUniqueWithoutUserInput | DailyQuizCompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyQuizCompletionCreateManyUserInputEnvelope
    set?: DailyQuizCompletionWhereUniqueInput | DailyQuizCompletionWhereUniqueInput[]
    disconnect?: DailyQuizCompletionWhereUniqueInput | DailyQuizCompletionWhereUniqueInput[]
    delete?: DailyQuizCompletionWhereUniqueInput | DailyQuizCompletionWhereUniqueInput[]
    connect?: DailyQuizCompletionWhereUniqueInput | DailyQuizCompletionWhereUniqueInput[]
    update?: DailyQuizCompletionUpdateWithWhereUniqueWithoutUserInput | DailyQuizCompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyQuizCompletionUpdateManyWithWhereWithoutUserInput | DailyQuizCompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyQuizCompletionScalarWhereInput | DailyQuizCompletionScalarWhereInput[]
  }

  export type TournamentEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TournamentEntryCreateWithoutUserInput, TournamentEntryUncheckedCreateWithoutUserInput> | TournamentEntryCreateWithoutUserInput[] | TournamentEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TournamentEntryCreateOrConnectWithoutUserInput | TournamentEntryCreateOrConnectWithoutUserInput[]
    upsert?: TournamentEntryUpsertWithWhereUniqueWithoutUserInput | TournamentEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TournamentEntryCreateManyUserInputEnvelope
    set?: TournamentEntryWhereUniqueInput | TournamentEntryWhereUniqueInput[]
    disconnect?: TournamentEntryWhereUniqueInput | TournamentEntryWhereUniqueInput[]
    delete?: TournamentEntryWhereUniqueInput | TournamentEntryWhereUniqueInput[]
    connect?: TournamentEntryWhereUniqueInput | TournamentEntryWhereUniqueInput[]
    update?: TournamentEntryUpdateWithWhereUniqueWithoutUserInput | TournamentEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TournamentEntryUpdateManyWithWhereWithoutUserInput | TournamentEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TournamentEntryScalarWhereInput | TournamentEntryScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type GeneralProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GeneralProgressCreateWithoutUserInput, GeneralProgressUncheckedCreateWithoutUserInput> | GeneralProgressCreateWithoutUserInput[] | GeneralProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneralProgressCreateOrConnectWithoutUserInput | GeneralProgressCreateOrConnectWithoutUserInput[]
    upsert?: GeneralProgressUpsertWithWhereUniqueWithoutUserInput | GeneralProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GeneralProgressCreateManyUserInputEnvelope
    set?: GeneralProgressWhereUniqueInput | GeneralProgressWhereUniqueInput[]
    disconnect?: GeneralProgressWhereUniqueInput | GeneralProgressWhereUniqueInput[]
    delete?: GeneralProgressWhereUniqueInput | GeneralProgressWhereUniqueInput[]
    connect?: GeneralProgressWhereUniqueInput | GeneralProgressWhereUniqueInput[]
    update?: GeneralProgressUpdateWithWhereUniqueWithoutUserInput | GeneralProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GeneralProgressUpdateManyWithWhereWithoutUserInput | GeneralProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GeneralProgressScalarWhereInput | GeneralProgressScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type QuestionCreateoptionsInput = {
    set: string[]
  }

  export type QuestionUpdateoptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MatchCreatequestionIdsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutMatchesAsP1Input = {
    create?: XOR<UserCreateWithoutMatchesAsP1Input, UserUncheckedCreateWithoutMatchesAsP1Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsP1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatchesAsP2Input = {
    create?: XOR<UserCreateWithoutMatchesAsP2Input, UserUncheckedCreateWithoutMatchesAsP2Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsP2Input
    connect?: UserWhereUniqueInput
  }

  export type TournamentCreateNestedOneWithoutMatchesInput = {
    create?: XOR<TournamentCreateWithoutMatchesInput, TournamentUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutMatchesInput
    connect?: TournamentWhereUniqueInput
  }

  export type MatchUpdatequestionIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutMatchesAsP1NestedInput = {
    create?: XOR<UserCreateWithoutMatchesAsP1Input, UserUncheckedCreateWithoutMatchesAsP1Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsP1Input
    upsert?: UserUpsertWithoutMatchesAsP1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesAsP1Input, UserUpdateWithoutMatchesAsP1Input>, UserUncheckedUpdateWithoutMatchesAsP1Input>
  }

  export type UserUpdateOneWithoutMatchesAsP2NestedInput = {
    create?: XOR<UserCreateWithoutMatchesAsP2Input, UserUncheckedCreateWithoutMatchesAsP2Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsP2Input
    upsert?: UserUpsertWithoutMatchesAsP2Input
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesAsP2Input, UserUpdateWithoutMatchesAsP2Input>, UserUncheckedUpdateWithoutMatchesAsP2Input>
  }

  export type TournamentUpdateOneWithoutMatchesNestedInput = {
    create?: XOR<TournamentCreateWithoutMatchesInput, TournamentUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutMatchesInput
    upsert?: TournamentUpsertWithoutMatchesInput
    disconnect?: boolean
    delete?: TournamentWhereInput | boolean
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutMatchesInput, TournamentUpdateWithoutMatchesInput>, TournamentUncheckedUpdateWithoutMatchesInput>
  }

  export type TournamentEntryCreateNestedManyWithoutTournamentInput = {
    create?: XOR<TournamentEntryCreateWithoutTournamentInput, TournamentEntryUncheckedCreateWithoutTournamentInput> | TournamentEntryCreateWithoutTournamentInput[] | TournamentEntryUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentEntryCreateOrConnectWithoutTournamentInput | TournamentEntryCreateOrConnectWithoutTournamentInput[]
    createMany?: TournamentEntryCreateManyTournamentInputEnvelope
    connect?: TournamentEntryWhereUniqueInput | TournamentEntryWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutTournamentInput = {
    create?: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput> | MatchCreateWithoutTournamentInput[] | MatchUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentInput | MatchCreateOrConnectWithoutTournamentInput[]
    createMany?: MatchCreateManyTournamentInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type TournamentEntryUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<TournamentEntryCreateWithoutTournamentInput, TournamentEntryUncheckedCreateWithoutTournamentInput> | TournamentEntryCreateWithoutTournamentInput[] | TournamentEntryUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentEntryCreateOrConnectWithoutTournamentInput | TournamentEntryCreateOrConnectWithoutTournamentInput[]
    createMany?: TournamentEntryCreateManyTournamentInputEnvelope
    connect?: TournamentEntryWhereUniqueInput | TournamentEntryWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput> | MatchCreateWithoutTournamentInput[] | MatchUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentInput | MatchCreateOrConnectWithoutTournamentInput[]
    createMany?: MatchCreateManyTournamentInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type TournamentEntryUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<TournamentEntryCreateWithoutTournamentInput, TournamentEntryUncheckedCreateWithoutTournamentInput> | TournamentEntryCreateWithoutTournamentInput[] | TournamentEntryUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentEntryCreateOrConnectWithoutTournamentInput | TournamentEntryCreateOrConnectWithoutTournamentInput[]
    upsert?: TournamentEntryUpsertWithWhereUniqueWithoutTournamentInput | TournamentEntryUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: TournamentEntryCreateManyTournamentInputEnvelope
    set?: TournamentEntryWhereUniqueInput | TournamentEntryWhereUniqueInput[]
    disconnect?: TournamentEntryWhereUniqueInput | TournamentEntryWhereUniqueInput[]
    delete?: TournamentEntryWhereUniqueInput | TournamentEntryWhereUniqueInput[]
    connect?: TournamentEntryWhereUniqueInput | TournamentEntryWhereUniqueInput[]
    update?: TournamentEntryUpdateWithWhereUniqueWithoutTournamentInput | TournamentEntryUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: TournamentEntryUpdateManyWithWhereWithoutTournamentInput | TournamentEntryUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: TournamentEntryScalarWhereInput | TournamentEntryScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput> | MatchCreateWithoutTournamentInput[] | MatchUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentInput | MatchCreateOrConnectWithoutTournamentInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTournamentInput | MatchUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: MatchCreateManyTournamentInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTournamentInput | MatchUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTournamentInput | MatchUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type TournamentEntryUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<TournamentEntryCreateWithoutTournamentInput, TournamentEntryUncheckedCreateWithoutTournamentInput> | TournamentEntryCreateWithoutTournamentInput[] | TournamentEntryUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentEntryCreateOrConnectWithoutTournamentInput | TournamentEntryCreateOrConnectWithoutTournamentInput[]
    upsert?: TournamentEntryUpsertWithWhereUniqueWithoutTournamentInput | TournamentEntryUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: TournamentEntryCreateManyTournamentInputEnvelope
    set?: TournamentEntryWhereUniqueInput | TournamentEntryWhereUniqueInput[]
    disconnect?: TournamentEntryWhereUniqueInput | TournamentEntryWhereUniqueInput[]
    delete?: TournamentEntryWhereUniqueInput | TournamentEntryWhereUniqueInput[]
    connect?: TournamentEntryWhereUniqueInput | TournamentEntryWhereUniqueInput[]
    update?: TournamentEntryUpdateWithWhereUniqueWithoutTournamentInput | TournamentEntryUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: TournamentEntryUpdateManyWithWhereWithoutTournamentInput | TournamentEntryUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: TournamentEntryScalarWhereInput | TournamentEntryScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput> | MatchCreateWithoutTournamentInput[] | MatchUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentInput | MatchCreateOrConnectWithoutTournamentInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTournamentInput | MatchUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: MatchCreateManyTournamentInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTournamentInput | MatchUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTournamentInput | MatchUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type TournamentCreateNestedOneWithoutEntriesInput = {
    create?: XOR<TournamentCreateWithoutEntriesInput, TournamentUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutEntriesInput
    connect?: TournamentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTournamentEntriesInput = {
    create?: XOR<UserCreateWithoutTournamentEntriesInput, UserUncheckedCreateWithoutTournamentEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTournamentEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type TournamentUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<TournamentCreateWithoutEntriesInput, TournamentUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutEntriesInput
    upsert?: TournamentUpsertWithoutEntriesInput
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutEntriesInput, TournamentUpdateWithoutEntriesInput>, TournamentUncheckedUpdateWithoutEntriesInput>
  }

  export type UserUpdateOneRequiredWithoutTournamentEntriesNestedInput = {
    create?: XOR<UserCreateWithoutTournamentEntriesInput, UserUncheckedCreateWithoutTournamentEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTournamentEntriesInput
    upsert?: UserUpsertWithoutTournamentEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTournamentEntriesInput, UserUpdateWithoutTournamentEntriesInput>, UserUncheckedUpdateWithoutTournamentEntriesInput>
  }

  export type UserCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    upsert?: UserUpsertWithoutPurchasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchasesInput, UserUpdateWithoutPurchasesInput>, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type UserCreateNestedOneWithoutDailyCompletionsInput = {
    create?: XOR<UserCreateWithoutDailyCompletionsInput, UserUncheckedCreateWithoutDailyCompletionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyCompletionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDailyCompletionsNestedInput = {
    create?: XOR<UserCreateWithoutDailyCompletionsInput, UserUncheckedCreateWithoutDailyCompletionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyCompletionsInput
    upsert?: UserUpsertWithoutDailyCompletionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyCompletionsInput, UserUpdateWithoutDailyCompletionsInput>, UserUncheckedUpdateWithoutDailyCompletionsInput>
  }

  export type UserCreateNestedOneWithoutWeeklyStatsInput = {
    create?: XOR<UserCreateWithoutWeeklyStatsInput, UserUncheckedCreateWithoutWeeklyStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeeklyStatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWeeklyStatsNestedInput = {
    create?: XOR<UserCreateWithoutWeeklyStatsInput, UserUncheckedCreateWithoutWeeklyStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeeklyStatsInput
    upsert?: UserUpsertWithoutWeeklyStatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWeeklyStatsInput, UserUpdateWithoutWeeklyStatsInput>, UserUncheckedUpdateWithoutWeeklyStatsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutGeneralProgressInput = {
    create?: XOR<UserCreateWithoutGeneralProgressInput, UserUncheckedCreateWithoutGeneralProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutGeneralProgressInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGeneralProgressNestedInput = {
    create?: XOR<UserCreateWithoutGeneralProgressInput, UserUncheckedCreateWithoutGeneralProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutGeneralProgressInput
    upsert?: UserUpsertWithoutGeneralProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGeneralProgressInput, UserUpdateWithoutGeneralProgressInput>, UserUncheckedUpdateWithoutGeneralProgressInput>
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
    isSet?: boolean
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type MatchCreateWithoutPlayer1Input = {
    id?: string
    type: string
    status?: string
    winnerId?: string | null
    player1Score?: number
    player2Score?: number
    player1Finished?: boolean
    player2Finished?: boolean
    coinStake?: number
    questionIds?: MatchCreatequestionIdsInput | string[]
    roundNumber?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    player2?: UserCreateNestedOneWithoutMatchesAsP2Input
    tournament?: TournamentCreateNestedOneWithoutMatchesInput
  }

  export type MatchUncheckedCreateWithoutPlayer1Input = {
    id?: string
    type: string
    status?: string
    player2Id?: string | null
    winnerId?: string | null
    player1Score?: number
    player2Score?: number
    player1Finished?: boolean
    player2Finished?: boolean
    coinStake?: number
    questionIds?: MatchCreatequestionIdsInput | string[]
    tournamentId?: string | null
    roundNumber?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutPlayer1Input = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input>
  }

  export type MatchCreateManyPlayer1InputEnvelope = {
    data: MatchCreateManyPlayer1Input | MatchCreateManyPlayer1Input[]
  }

  export type MatchCreateWithoutPlayer2Input = {
    id?: string
    type: string
    status?: string
    winnerId?: string | null
    player1Score?: number
    player2Score?: number
    player1Finished?: boolean
    player2Finished?: boolean
    coinStake?: number
    questionIds?: MatchCreatequestionIdsInput | string[]
    roundNumber?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    player1: UserCreateNestedOneWithoutMatchesAsP1Input
    tournament?: TournamentCreateNestedOneWithoutMatchesInput
  }

  export type MatchUncheckedCreateWithoutPlayer2Input = {
    id?: string
    type: string
    status?: string
    player1Id: string
    winnerId?: string | null
    player1Score?: number
    player2Score?: number
    player1Finished?: boolean
    player2Finished?: boolean
    coinStake?: number
    questionIds?: MatchCreatequestionIdsInput | string[]
    tournamentId?: string | null
    roundNumber?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutPlayer2Input = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input>
  }

  export type MatchCreateManyPlayer2InputEnvelope = {
    data: MatchCreateManyPlayer2Input | MatchCreateManyPlayer2Input[]
  }

  export type PurchaseCreateWithoutUserInput = {
    id?: string
    itemId: string
    purchasedAt?: Date | string
  }

  export type PurchaseUncheckedCreateWithoutUserInput = {
    id?: string
    itemId: string
    purchasedAt?: Date | string
  }

  export type PurchaseCreateOrConnectWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput>
  }

  export type PurchaseCreateManyUserInputEnvelope = {
    data: PurchaseCreateManyUserInput | PurchaseCreateManyUserInput[]
  }

  export type WeeklyStatsCreateWithoutUserInput = {
    id?: string
    weekStart: string
    wins?: number
    matches?: number
    points?: number
  }

  export type WeeklyStatsUncheckedCreateWithoutUserInput = {
    id?: string
    weekStart: string
    wins?: number
    matches?: number
    points?: number
  }

  export type WeeklyStatsCreateOrConnectWithoutUserInput = {
    where: WeeklyStatsWhereUniqueInput
    create: XOR<WeeklyStatsCreateWithoutUserInput, WeeklyStatsUncheckedCreateWithoutUserInput>
  }

  export type WeeklyStatsCreateManyUserInputEnvelope = {
    data: WeeklyStatsCreateManyUserInput | WeeklyStatsCreateManyUserInput[]
  }

  export type DailyQuizCompletionCreateWithoutUserInput = {
    id?: string
    date: string
    score: number
    totalQ?: number
    coinsEarned?: number
    xpEarned?: number
    completedAt?: Date | string
  }

  export type DailyQuizCompletionUncheckedCreateWithoutUserInput = {
    id?: string
    date: string
    score: number
    totalQ?: number
    coinsEarned?: number
    xpEarned?: number
    completedAt?: Date | string
  }

  export type DailyQuizCompletionCreateOrConnectWithoutUserInput = {
    where: DailyQuizCompletionWhereUniqueInput
    create: XOR<DailyQuizCompletionCreateWithoutUserInput, DailyQuizCompletionUncheckedCreateWithoutUserInput>
  }

  export type DailyQuizCompletionCreateManyUserInputEnvelope = {
    data: DailyQuizCompletionCreateManyUserInput | DailyQuizCompletionCreateManyUserInput[]
  }

  export type TournamentEntryCreateWithoutUserInput = {
    id?: string
    joinedAt?: Date | string
    eliminated?: boolean
    placement?: number | null
    tournament: TournamentCreateNestedOneWithoutEntriesInput
  }

  export type TournamentEntryUncheckedCreateWithoutUserInput = {
    id?: string
    tournamentId: string
    joinedAt?: Date | string
    eliminated?: boolean
    placement?: number | null
  }

  export type TournamentEntryCreateOrConnectWithoutUserInput = {
    where: TournamentEntryWhereUniqueInput
    create: XOR<TournamentEntryCreateWithoutUserInput, TournamentEntryUncheckedCreateWithoutUserInput>
  }

  export type TournamentEntryCreateManyUserInputEnvelope = {
    data: TournamentEntryCreateManyUserInput | TournamentEntryCreateManyUserInput[]
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    type: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    type: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
  }

  export type GeneralProgressCreateWithoutUserInput = {
    id?: string
    category: string
    unlockedLevel?: number
    updatedAt?: Date | string
  }

  export type GeneralProgressUncheckedCreateWithoutUserInput = {
    id?: string
    category: string
    unlockedLevel?: number
    updatedAt?: Date | string
  }

  export type GeneralProgressCreateOrConnectWithoutUserInput = {
    where: GeneralProgressWhereUniqueInput
    create: XOR<GeneralProgressCreateWithoutUserInput, GeneralProgressUncheckedCreateWithoutUserInput>
  }

  export type GeneralProgressCreateManyUserInputEnvelope = {
    data: GeneralProgressCreateManyUserInput | GeneralProgressCreateManyUserInput[]
  }

  export type MatchUpsertWithWhereUniqueWithoutPlayer1Input = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutPlayer1Input, MatchUncheckedUpdateWithoutPlayer1Input>
    create: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input>
  }

  export type MatchUpdateWithWhereUniqueWithoutPlayer1Input = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutPlayer1Input, MatchUncheckedUpdateWithoutPlayer1Input>
  }

  export type MatchUpdateManyWithWhereWithoutPlayer1Input = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutPlayer1Input>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: StringFilter<"Match"> | string
    type?: StringFilter<"Match"> | string
    status?: StringFilter<"Match"> | string
    player1Id?: StringFilter<"Match"> | string
    player2Id?: StringNullableFilter<"Match"> | string | null
    winnerId?: StringNullableFilter<"Match"> | string | null
    player1Score?: IntFilter<"Match"> | number
    player2Score?: IntFilter<"Match"> | number
    player1Finished?: BoolFilter<"Match"> | boolean
    player2Finished?: BoolFilter<"Match"> | boolean
    coinStake?: IntFilter<"Match"> | number
    questionIds?: StringNullableListFilter<"Match">
    tournamentId?: StringNullableFilter<"Match"> | string | null
    roundNumber?: IntNullableFilter<"Match"> | number | null
    startedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutPlayer2Input = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutPlayer2Input, MatchUncheckedUpdateWithoutPlayer2Input>
    create: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input>
  }

  export type MatchUpdateWithWhereUniqueWithoutPlayer2Input = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutPlayer2Input, MatchUncheckedUpdateWithoutPlayer2Input>
  }

  export type MatchUpdateManyWithWhereWithoutPlayer2Input = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutPlayer2Input>
  }

  export type PurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutUserInput, PurchaseUncheckedUpdateWithoutUserInput>
    create: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutUserInput, PurchaseUncheckedUpdateWithoutUserInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutUserInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type PurchaseScalarWhereInput = {
    AND?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    OR?: PurchaseScalarWhereInput[]
    NOT?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    id?: StringFilter<"Purchase"> | string
    userId?: StringFilter<"Purchase"> | string
    itemId?: StringFilter<"Purchase"> | string
    purchasedAt?: DateTimeFilter<"Purchase"> | Date | string
  }

  export type WeeklyStatsUpsertWithWhereUniqueWithoutUserInput = {
    where: WeeklyStatsWhereUniqueInput
    update: XOR<WeeklyStatsUpdateWithoutUserInput, WeeklyStatsUncheckedUpdateWithoutUserInput>
    create: XOR<WeeklyStatsCreateWithoutUserInput, WeeklyStatsUncheckedCreateWithoutUserInput>
  }

  export type WeeklyStatsUpdateWithWhereUniqueWithoutUserInput = {
    where: WeeklyStatsWhereUniqueInput
    data: XOR<WeeklyStatsUpdateWithoutUserInput, WeeklyStatsUncheckedUpdateWithoutUserInput>
  }

  export type WeeklyStatsUpdateManyWithWhereWithoutUserInput = {
    where: WeeklyStatsScalarWhereInput
    data: XOR<WeeklyStatsUpdateManyMutationInput, WeeklyStatsUncheckedUpdateManyWithoutUserInput>
  }

  export type WeeklyStatsScalarWhereInput = {
    AND?: WeeklyStatsScalarWhereInput | WeeklyStatsScalarWhereInput[]
    OR?: WeeklyStatsScalarWhereInput[]
    NOT?: WeeklyStatsScalarWhereInput | WeeklyStatsScalarWhereInput[]
    id?: StringFilter<"WeeklyStats"> | string
    userId?: StringFilter<"WeeklyStats"> | string
    weekStart?: StringFilter<"WeeklyStats"> | string
    wins?: IntFilter<"WeeklyStats"> | number
    matches?: IntFilter<"WeeklyStats"> | number
    points?: IntFilter<"WeeklyStats"> | number
  }

  export type DailyQuizCompletionUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyQuizCompletionWhereUniqueInput
    update: XOR<DailyQuizCompletionUpdateWithoutUserInput, DailyQuizCompletionUncheckedUpdateWithoutUserInput>
    create: XOR<DailyQuizCompletionCreateWithoutUserInput, DailyQuizCompletionUncheckedCreateWithoutUserInput>
  }

  export type DailyQuizCompletionUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyQuizCompletionWhereUniqueInput
    data: XOR<DailyQuizCompletionUpdateWithoutUserInput, DailyQuizCompletionUncheckedUpdateWithoutUserInput>
  }

  export type DailyQuizCompletionUpdateManyWithWhereWithoutUserInput = {
    where: DailyQuizCompletionScalarWhereInput
    data: XOR<DailyQuizCompletionUpdateManyMutationInput, DailyQuizCompletionUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyQuizCompletionScalarWhereInput = {
    AND?: DailyQuizCompletionScalarWhereInput | DailyQuizCompletionScalarWhereInput[]
    OR?: DailyQuizCompletionScalarWhereInput[]
    NOT?: DailyQuizCompletionScalarWhereInput | DailyQuizCompletionScalarWhereInput[]
    id?: StringFilter<"DailyQuizCompletion"> | string
    userId?: StringFilter<"DailyQuizCompletion"> | string
    date?: StringFilter<"DailyQuizCompletion"> | string
    score?: IntFilter<"DailyQuizCompletion"> | number
    totalQ?: IntFilter<"DailyQuizCompletion"> | number
    coinsEarned?: IntFilter<"DailyQuizCompletion"> | number
    xpEarned?: IntFilter<"DailyQuizCompletion"> | number
    completedAt?: DateTimeFilter<"DailyQuizCompletion"> | Date | string
  }

  export type TournamentEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: TournamentEntryWhereUniqueInput
    update: XOR<TournamentEntryUpdateWithoutUserInput, TournamentEntryUncheckedUpdateWithoutUserInput>
    create: XOR<TournamentEntryCreateWithoutUserInput, TournamentEntryUncheckedCreateWithoutUserInput>
  }

  export type TournamentEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: TournamentEntryWhereUniqueInput
    data: XOR<TournamentEntryUpdateWithoutUserInput, TournamentEntryUncheckedUpdateWithoutUserInput>
  }

  export type TournamentEntryUpdateManyWithWhereWithoutUserInput = {
    where: TournamentEntryScalarWhereInput
    data: XOR<TournamentEntryUpdateManyMutationInput, TournamentEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type TournamentEntryScalarWhereInput = {
    AND?: TournamentEntryScalarWhereInput | TournamentEntryScalarWhereInput[]
    OR?: TournamentEntryScalarWhereInput[]
    NOT?: TournamentEntryScalarWhereInput | TournamentEntryScalarWhereInput[]
    id?: StringFilter<"TournamentEntry"> | string
    tournamentId?: StringFilter<"TournamentEntry"> | string
    userId?: StringFilter<"TournamentEntry"> | string
    joinedAt?: DateTimeFilter<"TournamentEntry"> | Date | string
    eliminated?: BoolFilter<"TournamentEntry"> | boolean
    placement?: IntNullableFilter<"TournamentEntry"> | number | null
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type GeneralProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: GeneralProgressWhereUniqueInput
    update: XOR<GeneralProgressUpdateWithoutUserInput, GeneralProgressUncheckedUpdateWithoutUserInput>
    create: XOR<GeneralProgressCreateWithoutUserInput, GeneralProgressUncheckedCreateWithoutUserInput>
  }

  export type GeneralProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: GeneralProgressWhereUniqueInput
    data: XOR<GeneralProgressUpdateWithoutUserInput, GeneralProgressUncheckedUpdateWithoutUserInput>
  }

  export type GeneralProgressUpdateManyWithWhereWithoutUserInput = {
    where: GeneralProgressScalarWhereInput
    data: XOR<GeneralProgressUpdateManyMutationInput, GeneralProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type GeneralProgressScalarWhereInput = {
    AND?: GeneralProgressScalarWhereInput | GeneralProgressScalarWhereInput[]
    OR?: GeneralProgressScalarWhereInput[]
    NOT?: GeneralProgressScalarWhereInput | GeneralProgressScalarWhereInput[]
    id?: StringFilter<"GeneralProgress"> | string
    userId?: StringFilter<"GeneralProgress"> | string
    category?: StringFilter<"GeneralProgress"> | string
    unlockedLevel?: IntFilter<"GeneralProgress"> | number
    updatedAt?: DateTimeFilter<"GeneralProgress"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsP1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsP2?: MatchCreateNestedManyWithoutPlayer2Input
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    weeklyStats?: WeeklyStatsCreateNestedManyWithoutUserInput
    dailyCompletions?: DailyQuizCompletionCreateNestedManyWithoutUserInput
    tournamentEntries?: TournamentEntryCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    generalProgress?: GeneralProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsP1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsP2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    weeklyStats?: WeeklyStatsUncheckedCreateNestedManyWithoutUserInput
    dailyCompletions?: DailyQuizCompletionUncheckedCreateNestedManyWithoutUserInput
    tournamentEntries?: TournamentEntryUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    generalProgress?: GeneralProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsP1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsP2?: MatchUpdateManyWithoutPlayer2NestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    weeklyStats?: WeeklyStatsUpdateManyWithoutUserNestedInput
    dailyCompletions?: DailyQuizCompletionUpdateManyWithoutUserNestedInput
    tournamentEntries?: TournamentEntryUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    generalProgress?: GeneralProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsP1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsP2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    weeklyStats?: WeeklyStatsUncheckedUpdateManyWithoutUserNestedInput
    dailyCompletions?: DailyQuizCompletionUncheckedUpdateManyWithoutUserNestedInput
    tournamentEntries?: TournamentEntryUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    generalProgress?: GeneralProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsP1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsP2?: MatchCreateNestedManyWithoutPlayer2Input
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    weeklyStats?: WeeklyStatsCreateNestedManyWithoutUserInput
    dailyCompletions?: DailyQuizCompletionCreateNestedManyWithoutUserInput
    tournamentEntries?: TournamentEntryCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    generalProgress?: GeneralProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsP1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsP2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    weeklyStats?: WeeklyStatsUncheckedCreateNestedManyWithoutUserInput
    dailyCompletions?: DailyQuizCompletionUncheckedCreateNestedManyWithoutUserInput
    tournamentEntries?: TournamentEntryUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    generalProgress?: GeneralProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsP1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsP2?: MatchUpdateManyWithoutPlayer2NestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    weeklyStats?: WeeklyStatsUpdateManyWithoutUserNestedInput
    dailyCompletions?: DailyQuizCompletionUpdateManyWithoutUserNestedInput
    tournamentEntries?: TournamentEntryUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    generalProgress?: GeneralProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsP1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsP2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    weeklyStats?: WeeklyStatsUncheckedUpdateManyWithoutUserNestedInput
    dailyCompletions?: DailyQuizCompletionUncheckedUpdateManyWithoutUserNestedInput
    tournamentEntries?: TournamentEntryUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    generalProgress?: GeneralProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMatchesAsP1Input = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsP2?: MatchCreateNestedManyWithoutPlayer2Input
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    weeklyStats?: WeeklyStatsCreateNestedManyWithoutUserInput
    dailyCompletions?: DailyQuizCompletionCreateNestedManyWithoutUserInput
    tournamentEntries?: TournamentEntryCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    generalProgress?: GeneralProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMatchesAsP1Input = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsP2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    weeklyStats?: WeeklyStatsUncheckedCreateNestedManyWithoutUserInput
    dailyCompletions?: DailyQuizCompletionUncheckedCreateNestedManyWithoutUserInput
    tournamentEntries?: TournamentEntryUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    generalProgress?: GeneralProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMatchesAsP1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesAsP1Input, UserUncheckedCreateWithoutMatchesAsP1Input>
  }

  export type UserCreateWithoutMatchesAsP2Input = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsP1?: MatchCreateNestedManyWithoutPlayer1Input
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    weeklyStats?: WeeklyStatsCreateNestedManyWithoutUserInput
    dailyCompletions?: DailyQuizCompletionCreateNestedManyWithoutUserInput
    tournamentEntries?: TournamentEntryCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    generalProgress?: GeneralProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMatchesAsP2Input = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsP1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    weeklyStats?: WeeklyStatsUncheckedCreateNestedManyWithoutUserInput
    dailyCompletions?: DailyQuizCompletionUncheckedCreateNestedManyWithoutUserInput
    tournamentEntries?: TournamentEntryUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    generalProgress?: GeneralProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMatchesAsP2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesAsP2Input, UserUncheckedCreateWithoutMatchesAsP2Input>
  }

  export type TournamentCreateWithoutMatchesInput = {
    id?: string
    name: string
    description?: string | null
    entryFee?: number
    prizePool?: number
    maxPlayers?: number
    status?: string
    bracket?: InputJsonValue | null
    winnerId?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    entries?: TournamentEntryCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutMatchesInput = {
    id?: string
    name: string
    description?: string | null
    entryFee?: number
    prizePool?: number
    maxPlayers?: number
    status?: string
    bracket?: InputJsonValue | null
    winnerId?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    entries?: TournamentEntryUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutMatchesInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutMatchesInput, TournamentUncheckedCreateWithoutMatchesInput>
  }

  export type UserUpsertWithoutMatchesAsP1Input = {
    update: XOR<UserUpdateWithoutMatchesAsP1Input, UserUncheckedUpdateWithoutMatchesAsP1Input>
    create: XOR<UserCreateWithoutMatchesAsP1Input, UserUncheckedCreateWithoutMatchesAsP1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesAsP1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesAsP1Input, UserUncheckedUpdateWithoutMatchesAsP1Input>
  }

  export type UserUpdateWithoutMatchesAsP1Input = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsP2?: MatchUpdateManyWithoutPlayer2NestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    weeklyStats?: WeeklyStatsUpdateManyWithoutUserNestedInput
    dailyCompletions?: DailyQuizCompletionUpdateManyWithoutUserNestedInput
    tournamentEntries?: TournamentEntryUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    generalProgress?: GeneralProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesAsP1Input = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsP2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    weeklyStats?: WeeklyStatsUncheckedUpdateManyWithoutUserNestedInput
    dailyCompletions?: DailyQuizCompletionUncheckedUpdateManyWithoutUserNestedInput
    tournamentEntries?: TournamentEntryUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    generalProgress?: GeneralProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutMatchesAsP2Input = {
    update: XOR<UserUpdateWithoutMatchesAsP2Input, UserUncheckedUpdateWithoutMatchesAsP2Input>
    create: XOR<UserCreateWithoutMatchesAsP2Input, UserUncheckedCreateWithoutMatchesAsP2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesAsP2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesAsP2Input, UserUncheckedUpdateWithoutMatchesAsP2Input>
  }

  export type UserUpdateWithoutMatchesAsP2Input = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsP1?: MatchUpdateManyWithoutPlayer1NestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    weeklyStats?: WeeklyStatsUpdateManyWithoutUserNestedInput
    dailyCompletions?: DailyQuizCompletionUpdateManyWithoutUserNestedInput
    tournamentEntries?: TournamentEntryUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    generalProgress?: GeneralProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesAsP2Input = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsP1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    weeklyStats?: WeeklyStatsUncheckedUpdateManyWithoutUserNestedInput
    dailyCompletions?: DailyQuizCompletionUncheckedUpdateManyWithoutUserNestedInput
    tournamentEntries?: TournamentEntryUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    generalProgress?: GeneralProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TournamentUpsertWithoutMatchesInput = {
    update: XOR<TournamentUpdateWithoutMatchesInput, TournamentUncheckedUpdateWithoutMatchesInput>
    create: XOR<TournamentCreateWithoutMatchesInput, TournamentUncheckedCreateWithoutMatchesInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutMatchesInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutMatchesInput, TournamentUncheckedUpdateWithoutMatchesInput>
  }

  export type TournamentUpdateWithoutMatchesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryFee?: IntFieldUpdateOperationsInput | number
    prizePool?: IntFieldUpdateOperationsInput | number
    maxPlayers?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    bracket?: InputJsonValue | InputJsonValue | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: TournamentEntryUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutMatchesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryFee?: IntFieldUpdateOperationsInput | number
    prizePool?: IntFieldUpdateOperationsInput | number
    maxPlayers?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    bracket?: InputJsonValue | InputJsonValue | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: TournamentEntryUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentEntryCreateWithoutTournamentInput = {
    id?: string
    joinedAt?: Date | string
    eliminated?: boolean
    placement?: number | null
    user: UserCreateNestedOneWithoutTournamentEntriesInput
  }

  export type TournamentEntryUncheckedCreateWithoutTournamentInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
    eliminated?: boolean
    placement?: number | null
  }

  export type TournamentEntryCreateOrConnectWithoutTournamentInput = {
    where: TournamentEntryWhereUniqueInput
    create: XOR<TournamentEntryCreateWithoutTournamentInput, TournamentEntryUncheckedCreateWithoutTournamentInput>
  }

  export type TournamentEntryCreateManyTournamentInputEnvelope = {
    data: TournamentEntryCreateManyTournamentInput | TournamentEntryCreateManyTournamentInput[]
  }

  export type MatchCreateWithoutTournamentInput = {
    id?: string
    type: string
    status?: string
    winnerId?: string | null
    player1Score?: number
    player2Score?: number
    player1Finished?: boolean
    player2Finished?: boolean
    coinStake?: number
    questionIds?: MatchCreatequestionIdsInput | string[]
    roundNumber?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    player1: UserCreateNestedOneWithoutMatchesAsP1Input
    player2?: UserCreateNestedOneWithoutMatchesAsP2Input
  }

  export type MatchUncheckedCreateWithoutTournamentInput = {
    id?: string
    type: string
    status?: string
    player1Id: string
    player2Id?: string | null
    winnerId?: string | null
    player1Score?: number
    player2Score?: number
    player1Finished?: boolean
    player2Finished?: boolean
    coinStake?: number
    questionIds?: MatchCreatequestionIdsInput | string[]
    roundNumber?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutTournamentInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput>
  }

  export type MatchCreateManyTournamentInputEnvelope = {
    data: MatchCreateManyTournamentInput | MatchCreateManyTournamentInput[]
  }

  export type TournamentEntryUpsertWithWhereUniqueWithoutTournamentInput = {
    where: TournamentEntryWhereUniqueInput
    update: XOR<TournamentEntryUpdateWithoutTournamentInput, TournamentEntryUncheckedUpdateWithoutTournamentInput>
    create: XOR<TournamentEntryCreateWithoutTournamentInput, TournamentEntryUncheckedCreateWithoutTournamentInput>
  }

  export type TournamentEntryUpdateWithWhereUniqueWithoutTournamentInput = {
    where: TournamentEntryWhereUniqueInput
    data: XOR<TournamentEntryUpdateWithoutTournamentInput, TournamentEntryUncheckedUpdateWithoutTournamentInput>
  }

  export type TournamentEntryUpdateManyWithWhereWithoutTournamentInput = {
    where: TournamentEntryScalarWhereInput
    data: XOR<TournamentEntryUpdateManyMutationInput, TournamentEntryUncheckedUpdateManyWithoutTournamentInput>
  }

  export type MatchUpsertWithWhereUniqueWithoutTournamentInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutTournamentInput, MatchUncheckedUpdateWithoutTournamentInput>
    create: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutTournamentInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutTournamentInput, MatchUncheckedUpdateWithoutTournamentInput>
  }

  export type MatchUpdateManyWithWhereWithoutTournamentInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutTournamentInput>
  }

  export type TournamentCreateWithoutEntriesInput = {
    id?: string
    name: string
    description?: string | null
    entryFee?: number
    prizePool?: number
    maxPlayers?: number
    status?: string
    bracket?: InputJsonValue | null
    winnerId?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    matches?: MatchCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutEntriesInput = {
    id?: string
    name: string
    description?: string | null
    entryFee?: number
    prizePool?: number
    maxPlayers?: number
    status?: string
    bracket?: InputJsonValue | null
    winnerId?: string | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    matches?: MatchUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutEntriesInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutEntriesInput, TournamentUncheckedCreateWithoutEntriesInput>
  }

  export type UserCreateWithoutTournamentEntriesInput = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsP1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsP2?: MatchCreateNestedManyWithoutPlayer2Input
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    weeklyStats?: WeeklyStatsCreateNestedManyWithoutUserInput
    dailyCompletions?: DailyQuizCompletionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    generalProgress?: GeneralProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTournamentEntriesInput = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsP1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsP2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    weeklyStats?: WeeklyStatsUncheckedCreateNestedManyWithoutUserInput
    dailyCompletions?: DailyQuizCompletionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    generalProgress?: GeneralProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTournamentEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTournamentEntriesInput, UserUncheckedCreateWithoutTournamentEntriesInput>
  }

  export type TournamentUpsertWithoutEntriesInput = {
    update: XOR<TournamentUpdateWithoutEntriesInput, TournamentUncheckedUpdateWithoutEntriesInput>
    create: XOR<TournamentCreateWithoutEntriesInput, TournamentUncheckedCreateWithoutEntriesInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutEntriesInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutEntriesInput, TournamentUncheckedUpdateWithoutEntriesInput>
  }

  export type TournamentUpdateWithoutEntriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryFee?: IntFieldUpdateOperationsInput | number
    prizePool?: IntFieldUpdateOperationsInput | number
    maxPlayers?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    bracket?: InputJsonValue | InputJsonValue | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutEntriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entryFee?: IntFieldUpdateOperationsInput | number
    prizePool?: IntFieldUpdateOperationsInput | number
    maxPlayers?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    bracket?: InputJsonValue | InputJsonValue | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type UserUpsertWithoutTournamentEntriesInput = {
    update: XOR<UserUpdateWithoutTournamentEntriesInput, UserUncheckedUpdateWithoutTournamentEntriesInput>
    create: XOR<UserCreateWithoutTournamentEntriesInput, UserUncheckedCreateWithoutTournamentEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTournamentEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTournamentEntriesInput, UserUncheckedUpdateWithoutTournamentEntriesInput>
  }

  export type UserUpdateWithoutTournamentEntriesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsP1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsP2?: MatchUpdateManyWithoutPlayer2NestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    weeklyStats?: WeeklyStatsUpdateManyWithoutUserNestedInput
    dailyCompletions?: DailyQuizCompletionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    generalProgress?: GeneralProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTournamentEntriesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsP1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsP2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    weeklyStats?: WeeklyStatsUncheckedUpdateManyWithoutUserNestedInput
    dailyCompletions?: DailyQuizCompletionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    generalProgress?: GeneralProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPurchasesInput = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsP1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsP2?: MatchCreateNestedManyWithoutPlayer2Input
    weeklyStats?: WeeklyStatsCreateNestedManyWithoutUserInput
    dailyCompletions?: DailyQuizCompletionCreateNestedManyWithoutUserInput
    tournamentEntries?: TournamentEntryCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    generalProgress?: GeneralProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPurchasesInput = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsP1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsP2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    weeklyStats?: WeeklyStatsUncheckedCreateNestedManyWithoutUserInput
    dailyCompletions?: DailyQuizCompletionUncheckedCreateNestedManyWithoutUserInput
    tournamentEntries?: TournamentEntryUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    generalProgress?: GeneralProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
  }

  export type UserUpsertWithoutPurchasesInput = {
    update: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type UserUpdateWithoutPurchasesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsP1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsP2?: MatchUpdateManyWithoutPlayer2NestedInput
    weeklyStats?: WeeklyStatsUpdateManyWithoutUserNestedInput
    dailyCompletions?: DailyQuizCompletionUpdateManyWithoutUserNestedInput
    tournamentEntries?: TournamentEntryUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    generalProgress?: GeneralProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchasesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsP1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsP2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    weeklyStats?: WeeklyStatsUncheckedUpdateManyWithoutUserNestedInput
    dailyCompletions?: DailyQuizCompletionUncheckedUpdateManyWithoutUserNestedInput
    tournamentEntries?: TournamentEntryUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    generalProgress?: GeneralProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDailyCompletionsInput = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsP1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsP2?: MatchCreateNestedManyWithoutPlayer2Input
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    weeklyStats?: WeeklyStatsCreateNestedManyWithoutUserInput
    tournamentEntries?: TournamentEntryCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    generalProgress?: GeneralProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyCompletionsInput = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsP1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsP2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    weeklyStats?: WeeklyStatsUncheckedCreateNestedManyWithoutUserInput
    tournamentEntries?: TournamentEntryUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    generalProgress?: GeneralProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyCompletionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyCompletionsInput, UserUncheckedCreateWithoutDailyCompletionsInput>
  }

  export type UserUpsertWithoutDailyCompletionsInput = {
    update: XOR<UserUpdateWithoutDailyCompletionsInput, UserUncheckedUpdateWithoutDailyCompletionsInput>
    create: XOR<UserCreateWithoutDailyCompletionsInput, UserUncheckedCreateWithoutDailyCompletionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyCompletionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyCompletionsInput, UserUncheckedUpdateWithoutDailyCompletionsInput>
  }

  export type UserUpdateWithoutDailyCompletionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsP1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsP2?: MatchUpdateManyWithoutPlayer2NestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    weeklyStats?: WeeklyStatsUpdateManyWithoutUserNestedInput
    tournamentEntries?: TournamentEntryUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    generalProgress?: GeneralProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyCompletionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsP1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsP2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    weeklyStats?: WeeklyStatsUncheckedUpdateManyWithoutUserNestedInput
    tournamentEntries?: TournamentEntryUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    generalProgress?: GeneralProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWeeklyStatsInput = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsP1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsP2?: MatchCreateNestedManyWithoutPlayer2Input
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    dailyCompletions?: DailyQuizCompletionCreateNestedManyWithoutUserInput
    tournamentEntries?: TournamentEntryCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    generalProgress?: GeneralProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWeeklyStatsInput = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsP1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsP2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    dailyCompletions?: DailyQuizCompletionUncheckedCreateNestedManyWithoutUserInput
    tournamentEntries?: TournamentEntryUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    generalProgress?: GeneralProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWeeklyStatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWeeklyStatsInput, UserUncheckedCreateWithoutWeeklyStatsInput>
  }

  export type UserUpsertWithoutWeeklyStatsInput = {
    update: XOR<UserUpdateWithoutWeeklyStatsInput, UserUncheckedUpdateWithoutWeeklyStatsInput>
    create: XOR<UserCreateWithoutWeeklyStatsInput, UserUncheckedCreateWithoutWeeklyStatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWeeklyStatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWeeklyStatsInput, UserUncheckedUpdateWithoutWeeklyStatsInput>
  }

  export type UserUpdateWithoutWeeklyStatsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsP1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsP2?: MatchUpdateManyWithoutPlayer2NestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    dailyCompletions?: DailyQuizCompletionUpdateManyWithoutUserNestedInput
    tournamentEntries?: TournamentEntryUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    generalProgress?: GeneralProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWeeklyStatsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsP1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsP2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    dailyCompletions?: DailyQuizCompletionUncheckedUpdateManyWithoutUserNestedInput
    tournamentEntries?: TournamentEntryUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    generalProgress?: GeneralProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsP1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsP2?: MatchCreateNestedManyWithoutPlayer2Input
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    weeklyStats?: WeeklyStatsCreateNestedManyWithoutUserInput
    dailyCompletions?: DailyQuizCompletionCreateNestedManyWithoutUserInput
    tournamentEntries?: TournamentEntryCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    generalProgress?: GeneralProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsP1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsP2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    weeklyStats?: WeeklyStatsUncheckedCreateNestedManyWithoutUserInput
    dailyCompletions?: DailyQuizCompletionUncheckedCreateNestedManyWithoutUserInput
    tournamentEntries?: TournamentEntryUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    generalProgress?: GeneralProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsP1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsP2?: MatchUpdateManyWithoutPlayer2NestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    weeklyStats?: WeeklyStatsUpdateManyWithoutUserNestedInput
    dailyCompletions?: DailyQuizCompletionUpdateManyWithoutUserNestedInput
    tournamentEntries?: TournamentEntryUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    generalProgress?: GeneralProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsP1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsP2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    weeklyStats?: WeeklyStatsUncheckedUpdateManyWithoutUserNestedInput
    dailyCompletions?: DailyQuizCompletionUncheckedUpdateManyWithoutUserNestedInput
    tournamentEntries?: TournamentEntryUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    generalProgress?: GeneralProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutGeneralProgressInput = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsP1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsP2?: MatchCreateNestedManyWithoutPlayer2Input
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    weeklyStats?: WeeklyStatsCreateNestedManyWithoutUserInput
    dailyCompletions?: DailyQuizCompletionCreateNestedManyWithoutUserInput
    tournamentEntries?: TournamentEntryCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGeneralProgressInput = {
    id?: string
    username: string
    email: string
    passwordHash?: string | null
    avatarUrl?: string | null
    avatarFrameId?: string | null
    bio?: string | null
    level?: number
    xp?: number
    coins?: number
    rankedPoints?: number
    totalWins?: number
    totalMatches?: number
    longestStreak?: number
    loginStreak?: number
    lastLoginDate?: Date | string | null
    lastSpinDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchesAsP1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsP2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    weeklyStats?: WeeklyStatsUncheckedCreateNestedManyWithoutUserInput
    dailyCompletions?: DailyQuizCompletionUncheckedCreateNestedManyWithoutUserInput
    tournamentEntries?: TournamentEntryUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGeneralProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGeneralProgressInput, UserUncheckedCreateWithoutGeneralProgressInput>
  }

  export type UserUpsertWithoutGeneralProgressInput = {
    update: XOR<UserUpdateWithoutGeneralProgressInput, UserUncheckedUpdateWithoutGeneralProgressInput>
    create: XOR<UserCreateWithoutGeneralProgressInput, UserUncheckedCreateWithoutGeneralProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGeneralProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGeneralProgressInput, UserUncheckedUpdateWithoutGeneralProgressInput>
  }

  export type UserUpdateWithoutGeneralProgressInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsP1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsP2?: MatchUpdateManyWithoutPlayer2NestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    weeklyStats?: WeeklyStatsUpdateManyWithoutUserNestedInput
    dailyCompletions?: DailyQuizCompletionUpdateManyWithoutUserNestedInput
    tournamentEntries?: TournamentEntryUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGeneralProgressInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarFrameId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    rankedPoints?: IntFieldUpdateOperationsInput | number
    totalWins?: IntFieldUpdateOperationsInput | number
    totalMatches?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    loginStreak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSpinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchesAsP1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsP2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    weeklyStats?: WeeklyStatsUncheckedUpdateManyWithoutUserNestedInput
    dailyCompletions?: DailyQuizCompletionUncheckedUpdateManyWithoutUserNestedInput
    tournamentEntries?: TournamentEntryUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MatchCreateManyPlayer1Input = {
    id?: string
    type: string
    status?: string
    player2Id?: string | null
    winnerId?: string | null
    player1Score?: number
    player2Score?: number
    player1Finished?: boolean
    player2Finished?: boolean
    coinStake?: number
    questionIds?: MatchCreatequestionIdsInput | string[]
    tournamentId?: string | null
    roundNumber?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MatchCreateManyPlayer2Input = {
    id?: string
    type: string
    status?: string
    player1Id: string
    winnerId?: string | null
    player1Score?: number
    player2Score?: number
    player1Finished?: boolean
    player2Finished?: boolean
    coinStake?: number
    questionIds?: MatchCreatequestionIdsInput | string[]
    tournamentId?: string | null
    roundNumber?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PurchaseCreateManyUserInput = {
    id?: string
    itemId: string
    purchasedAt?: Date | string
  }

  export type WeeklyStatsCreateManyUserInput = {
    id?: string
    weekStart: string
    wins?: number
    matches?: number
    points?: number
  }

  export type DailyQuizCompletionCreateManyUserInput = {
    id?: string
    date: string
    score: number
    totalQ?: number
    coinsEarned?: number
    xpEarned?: number
    completedAt?: Date | string
  }

  export type TournamentEntryCreateManyUserInput = {
    id?: string
    tournamentId: string
    joinedAt?: Date | string
    eliminated?: boolean
    placement?: number | null
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    title: string
    message: string
    type: string
    read?: boolean
    createdAt?: Date | string
  }

  export type GeneralProgressCreateManyUserInput = {
    id?: string
    category: string
    unlockedLevel?: number
    updatedAt?: Date | string
  }

  export type MatchUpdateWithoutPlayer1Input = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Finished?: BoolFieldUpdateOperationsInput | boolean
    player2Finished?: BoolFieldUpdateOperationsInput | boolean
    coinStake?: IntFieldUpdateOperationsInput | number
    questionIds?: MatchUpdatequestionIdsInput | string[]
    roundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player2?: UserUpdateOneWithoutMatchesAsP2NestedInput
    tournament?: TournamentUpdateOneWithoutMatchesNestedInput
  }

  export type MatchUncheckedUpdateWithoutPlayer1Input = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    player2Id?: NullableStringFieldUpdateOperationsInput | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Finished?: BoolFieldUpdateOperationsInput | boolean
    player2Finished?: BoolFieldUpdateOperationsInput | boolean
    coinStake?: IntFieldUpdateOperationsInput | number
    questionIds?: MatchUpdatequestionIdsInput | string[]
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
    roundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyWithoutPlayer1Input = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    player2Id?: NullableStringFieldUpdateOperationsInput | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Finished?: BoolFieldUpdateOperationsInput | boolean
    player2Finished?: BoolFieldUpdateOperationsInput | boolean
    coinStake?: IntFieldUpdateOperationsInput | number
    questionIds?: MatchUpdatequestionIdsInput | string[]
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
    roundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutPlayer2Input = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Finished?: BoolFieldUpdateOperationsInput | boolean
    player2Finished?: BoolFieldUpdateOperationsInput | boolean
    coinStake?: IntFieldUpdateOperationsInput | number
    questionIds?: MatchUpdatequestionIdsInput | string[]
    roundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutMatchesAsP1NestedInput
    tournament?: TournamentUpdateOneWithoutMatchesNestedInput
  }

  export type MatchUncheckedUpdateWithoutPlayer2Input = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Finished?: BoolFieldUpdateOperationsInput | boolean
    player2Finished?: BoolFieldUpdateOperationsInput | boolean
    coinStake?: IntFieldUpdateOperationsInput | number
    questionIds?: MatchUpdatequestionIdsInput | string[]
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
    roundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyWithoutPlayer2Input = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Finished?: BoolFieldUpdateOperationsInput | boolean
    player2Finished?: BoolFieldUpdateOperationsInput | boolean
    coinStake?: IntFieldUpdateOperationsInput | number
    questionIds?: MatchUpdatequestionIdsInput | string[]
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
    roundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUpdateWithoutUserInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateWithoutUserInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyWithoutUserInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyStatsUpdateWithoutUserInput = {
    weekStart?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklyStatsUncheckedUpdateWithoutUserInput = {
    weekStart?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklyStatsUncheckedUpdateManyWithoutUserInput = {
    weekStart?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type DailyQuizCompletionUpdateWithoutUserInput = {
    date?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    totalQ?: IntFieldUpdateOperationsInput | number
    coinsEarned?: IntFieldUpdateOperationsInput | number
    xpEarned?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyQuizCompletionUncheckedUpdateWithoutUserInput = {
    date?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    totalQ?: IntFieldUpdateOperationsInput | number
    coinsEarned?: IntFieldUpdateOperationsInput | number
    xpEarned?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyQuizCompletionUncheckedUpdateManyWithoutUserInput = {
    date?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    totalQ?: IntFieldUpdateOperationsInput | number
    coinsEarned?: IntFieldUpdateOperationsInput | number
    xpEarned?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentEntryUpdateWithoutUserInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminated?: BoolFieldUpdateOperationsInput | boolean
    placement?: NullableIntFieldUpdateOperationsInput | number | null
    tournament?: TournamentUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type TournamentEntryUncheckedUpdateWithoutUserInput = {
    tournamentId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminated?: BoolFieldUpdateOperationsInput | boolean
    placement?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TournamentEntryUncheckedUpdateManyWithoutUserInput = {
    tournamentId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminated?: BoolFieldUpdateOperationsInput | boolean
    placement?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneralProgressUpdateWithoutUserInput = {
    category?: StringFieldUpdateOperationsInput | string
    unlockedLevel?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneralProgressUncheckedUpdateWithoutUserInput = {
    category?: StringFieldUpdateOperationsInput | string
    unlockedLevel?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneralProgressUncheckedUpdateManyWithoutUserInput = {
    category?: StringFieldUpdateOperationsInput | string
    unlockedLevel?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentEntryCreateManyTournamentInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
    eliminated?: boolean
    placement?: number | null
  }

  export type MatchCreateManyTournamentInput = {
    id?: string
    type: string
    status?: string
    player1Id: string
    player2Id?: string | null
    winnerId?: string | null
    player1Score?: number
    player2Score?: number
    player1Finished?: boolean
    player2Finished?: boolean
    coinStake?: number
    questionIds?: MatchCreatequestionIdsInput | string[]
    roundNumber?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TournamentEntryUpdateWithoutTournamentInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminated?: BoolFieldUpdateOperationsInput | boolean
    placement?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutTournamentEntriesNestedInput
  }

  export type TournamentEntryUncheckedUpdateWithoutTournamentInput = {
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminated?: BoolFieldUpdateOperationsInput | boolean
    placement?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TournamentEntryUncheckedUpdateManyWithoutTournamentInput = {
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminated?: BoolFieldUpdateOperationsInput | boolean
    placement?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MatchUpdateWithoutTournamentInput = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Finished?: BoolFieldUpdateOperationsInput | boolean
    player2Finished?: BoolFieldUpdateOperationsInput | boolean
    coinStake?: IntFieldUpdateOperationsInput | number
    questionIds?: MatchUpdatequestionIdsInput | string[]
    roundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutMatchesAsP1NestedInput
    player2?: UserUpdateOneWithoutMatchesAsP2NestedInput
  }

  export type MatchUncheckedUpdateWithoutTournamentInput = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: NullableStringFieldUpdateOperationsInput | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Finished?: BoolFieldUpdateOperationsInput | boolean
    player2Finished?: BoolFieldUpdateOperationsInput | boolean
    coinStake?: IntFieldUpdateOperationsInput | number
    questionIds?: MatchUpdatequestionIdsInput | string[]
    roundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyWithoutTournamentInput = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: NullableStringFieldUpdateOperationsInput | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Finished?: BoolFieldUpdateOperationsInput | boolean
    player2Finished?: BoolFieldUpdateOperationsInput | boolean
    coinStake?: IntFieldUpdateOperationsInput | number
    questionIds?: MatchUpdatequestionIdsInput | string[]
    roundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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