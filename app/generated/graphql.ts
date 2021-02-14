export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: string;
  timestamptz: string;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** An object with globally unique ID */
export type Node = {
  /** A globally unique identifier */
  id: Scalars['ID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "admins" */
export type Admins = Node & {
  __typename?: 'admins';
  created_at: Scalars['timestamptz'];
  id: Scalars['ID'];
  password: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  username: Scalars['String'];
};

/** A Relay Connection object on "admins" */
export type AdminsConnection = {
  __typename?: 'adminsConnection';
  edges: Array<AdminsEdge>;
  pageInfo: PageInfo;
};

export type AdminsEdge = {
  __typename?: 'adminsEdge';
  cursor: Scalars['String'];
  node: Admins;
};

/** aggregated selection of "admins" */
export type Admins_Aggregate = {
  __typename?: 'admins_aggregate';
  aggregate?: Maybe<Admins_Aggregate_Fields>;
  nodes: Array<Admins>;
};

/** aggregate fields of "admins" */
export type Admins_Aggregate_Fields = {
  __typename?: 'admins_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Admins_Max_Fields>;
  min?: Maybe<Admins_Min_Fields>;
};


/** aggregate fields of "admins" */
export type Admins_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Admins_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "admins" */
export type Admins_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Admins_Max_Order_By>;
  min?: Maybe<Admins_Min_Order_By>;
};

/** input type for inserting array relation for remote table "admins" */
export type Admins_Arr_Rel_Insert_Input = {
  data: Array<Admins_Insert_Input>;
  on_conflict?: Maybe<Admins_On_Conflict>;
};

/** Boolean expression to filter rows from the table "admins". All fields are combined with a logical 'AND'. */
export type Admins_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Admins_Bool_Exp>>>;
  _not?: Maybe<Admins_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Admins_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "admins" */
export enum Admins_Constraint {
  /** unique or primary key constraint */
  AdminsPkey = 'admins_pkey',
  /** unique or primary key constraint */
  AdminsUsernameKey = 'admins_username_key'
}

/** input type for inserting data into table "admins" */
export type Admins_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Admins_Max_Fields = {
  __typename?: 'admins_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "admins" */
export type Admins_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Admins_Min_Fields = {
  __typename?: 'admins_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "admins" */
export type Admins_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "admins" */
export type Admins_Mutation_Response = {
  __typename?: 'admins_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Admins>;
};

/** input type for inserting object relation for remote table "admins" */
export type Admins_Obj_Rel_Insert_Input = {
  data: Admins_Insert_Input;
  on_conflict?: Maybe<Admins_On_Conflict>;
};

/** on conflict condition type for table "admins" */
export type Admins_On_Conflict = {
  constraint: Admins_Constraint;
  update_columns: Array<Admins_Update_Column>;
  where?: Maybe<Admins_Bool_Exp>;
};

/** ordering options when selecting data from "admins" */
export type Admins_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: "admins" */
export type Admins_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "admins" */
export enum Admins_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "admins" */
export type Admins_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** update columns of table "admins" */
export enum Admins_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "admins" */
  delete_admins?: Maybe<Admins_Mutation_Response>;
  /** delete single row from the table: "admins" */
  delete_admins_by_pk?: Maybe<Admins>;
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** insert data into the table: "admins" */
  insert_admins?: Maybe<Admins_Mutation_Response>;
  /** insert a single row into the table: "admins" */
  insert_admins_one?: Maybe<Admins>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  /** update data of the table: "admins" */
  update_admins?: Maybe<Admins_Mutation_Response>;
  /** update single row of the table: "admins" */
  update_admins_by_pk?: Maybe<Admins>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
};


/** mutation root */
export type Mutation_RootDelete_AdminsArgs = {
  where: Admins_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Admins_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_AdminsArgs = {
  objects: Array<Admins_Insert_Input>;
  on_conflict?: Maybe<Admins_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Admins_OneArgs = {
  object: Admins_Insert_Input;
  on_conflict?: Maybe<Admins_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>;
  on_conflict?: Maybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input;
  on_conflict?: Maybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AdminsArgs = {
  _set?: Maybe<Admins_Set_Input>;
  where: Admins_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Admins_By_PkArgs = {
  _set?: Maybe<Admins_Set_Input>;
  pk_columns: Admins_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _set?: Maybe<Posts_Set_Input>;
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _set?: Maybe<Posts_Set_Input>;
  pk_columns: Posts_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "posts" */
export type Posts = Node & {
  __typename?: 'posts';
  body: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  excerpt: Scalars['String'];
  id: Scalars['ID'];
  published: Scalars['Boolean'];
  published_at?: Maybe<Scalars['date']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** A Relay Connection object on "posts" */
export type PostsConnection = {
  __typename?: 'postsConnection';
  edges: Array<PostsEdge>;
  pageInfo: PageInfo;
};

export type PostsEdge = {
  __typename?: 'postsEdge';
  cursor: Scalars['String'];
  node: Posts;
};

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
  __typename?: 'posts_aggregate';
  aggregate?: Maybe<Posts_Aggregate_Fields>;
  nodes: Array<Posts>;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
  __typename?: 'posts_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Posts_Max_Fields>;
  min?: Maybe<Posts_Min_Fields>;
};


/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Posts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "posts" */
export type Posts_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Posts_Max_Order_By>;
  min?: Maybe<Posts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "posts" */
export type Posts_Arr_Rel_Insert_Input = {
  data: Array<Posts_Insert_Input>;
  on_conflict?: Maybe<Posts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Posts_Bool_Exp>>>;
  _not?: Maybe<Posts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Posts_Bool_Exp>>>;
  body?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  excerpt?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  published?: Maybe<Boolean_Comparison_Exp>;
  published_at?: Maybe<Date_Comparison_Exp>;
  slug?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint */
  PostsPkey = 'posts_pkey',
  /** unique or primary key constraint */
  PostsSlugKey = 'posts_slug_key',
  /** unique or primary key constraint */
  PostsTitleKey = 'posts_title_key'
}

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  excerpt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['date']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
  __typename?: 'posts_max_fields';
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  excerpt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['date']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
  body?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  excerpt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  published_at?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
  __typename?: 'posts_min_fields';
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  excerpt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['date']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
  body?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  excerpt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  published_at?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
  __typename?: 'posts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Posts>;
};

/** input type for inserting object relation for remote table "posts" */
export type Posts_Obj_Rel_Insert_Input = {
  data: Posts_Insert_Input;
  on_conflict?: Maybe<Posts_On_Conflict>;
};

/** on conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint;
  update_columns: Array<Posts_Update_Column>;
  where?: Maybe<Posts_Bool_Exp>;
};

/** ordering options when selecting data from "posts" */
export type Posts_Order_By = {
  body?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  excerpt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  published?: Maybe<Order_By>;
  published_at?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "posts" */
export type Posts_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Excerpt = 'excerpt',
  /** column name */
  Id = 'id',
  /** column name */
  Published = 'published',
  /** column name */
  PublishedAt = 'published_at',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  excerpt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['date']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Excerpt = 'excerpt',
  /** column name */
  Id = 'id',
  /** column name */
  Published = 'published',
  /** column name */
  PublishedAt = 'published_at',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "admins" */
  admins_connection: AdminsConnection;
  node?: Maybe<Node>;
  /** fetch data from the table: "posts" */
  posts_connection: PostsConnection;
};


/** query root */
export type Query_RootAdmins_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<Admins_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Admins_Order_By>>;
  where?: Maybe<Admins_Bool_Exp>;
};


/** query root */
export type Query_RootNodeArgs = {
  id: Scalars['ID'];
};


/** query root */
export type Query_RootPosts_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "admins" */
  admins_connection: AdminsConnection;
  node?: Maybe<Node>;
  /** fetch data from the table: "posts" */
  posts_connection: PostsConnection;
};


/** subscription root */
export type Subscription_RootAdmins_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<Admins_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Admins_Order_By>>;
  where?: Maybe<Admins_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNodeArgs = {
  id: Scalars['ID'];
};


/** subscription root */
export type Subscription_RootPosts_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type PostsQueryVariables = Exact<{
  where?: Maybe<Posts_Bool_Exp>;
}>;


export type PostsQuery = (
  { __typename?: 'query_root' }
  & { posts_connection: (
    { __typename?: 'postsConnection' }
    & { edges: Array<(
      { __typename?: 'postsEdge' }
      & { node: (
        { __typename?: 'posts' }
        & Pick<Posts, 'id' | 'title' | 'excerpt' | 'body' | 'slug' | 'published_at'>
      ) }
    )> }
  ) }
);

export type PostBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type PostBySlugQuery = (
  { __typename?: 'query_root' }
  & { posts_connection: (
    { __typename?: 'postsConnection' }
    & { edges: Array<(
      { __typename?: 'postsEdge' }
      & { node: (
        { __typename?: 'posts' }
        & Pick<Posts, 'title' | 'excerpt' | 'body' | 'published_at'>
      ) }
    )> }
  ) }
);
