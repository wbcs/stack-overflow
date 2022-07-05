function narrowUnknownishUnion(x: {} | null | undefined) {
  if (x) {
    x; // {}
  } else {
    x; // {} | null | undefined
  }
}

function narrowUnknown(x: unknown) {
  if (x) {
    x; // used to be 'unknown', now '{}'
  } else {
    x; // unknown
  }
}

// SomeNum used to be 'number'; now it's '100'.
type SomeNum = '100' extends `${infer U extends number}` ? U : never;

// SomeBigInt used to be 'bigint'; now it's '100n'.
type SomeBigInt = '100' extends `${infer U extends bigint}` ? U : never;

// SomeBool used to be 'boolean'; now it's 'true'.
type SomeBool = 'true' extends `${infer U extends boolean}` ? U : never;

type ParseInt<T extends string> = T extends `${infer U extends number}`
  ? U
  : never;

type num0 = ParseInt<'0x123AD'>;

type Test = Sum<123, 123>;

type ToString<A extends number> = `${A}`;
type Reverse<A extends string> = A extends `${infer H}${infer T}`
  ? `${Reverse<T>}${H}`
  : A;
type HT<T> = T extends `${infer H}${infer T}`
  ? { H: H; T: T }
  : { H: '0'; T: '' };
type Head<T> = T extends `${infer H}${any}` ? H : '0';
type Tail<T> = T extends `${string}${infer T}` ? T : '';
type R0 = Tail<''>;
type Concat<A, B> = A extends string
  ? B extends string
    ? `${A}${B}`
    : never
  : never;
type Nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
type Shuffle<T extends any[]> = T extends [infer H, ...infer T]
  ? [...T, H]
  : never;
type MakeTable<T extends any[], S extends any[]> = T extends [any, ...infer T]
  ? [S, ...MakeTable<T, Shuffle<S>>]
  : [];
type SumTable = MakeTable<Nums, Nums>;
type SumD = { 0: SumTable; 1: Shuffle<SumTable> };
type Index<B, A> = A extends keyof B ? B[A] : never;
type SumDR<A, B, C> = Index<Index<Index<SumD, A>, B>, C>;
type Carries = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
type CarryTable = MakeTable<[0, ...Nums], Carries>;
type SumC = { 0: CarryTable; 1: Shuffle<CarryTable> };
type Lookup<T, C, A, B> = Index<Index<Index<T, C>, Head<A>>, Head<B>>;
type SumS<A extends string, B extends string, C = 0> = Concat<A, B> extends ''
  ? C extends 1
    ? '1'
    : ''
  : Concat<
      SumS<Tail<A>, Tail<B>, Lookup<SumC, C, A, B>>,
      Lookup<SumD, C, A, B>
    >;

type Sum<A extends number, B extends number> = SumS<
  Reverse<ToString<A>>,
  Reverse<ToString<B>>
>;


// type a = Record