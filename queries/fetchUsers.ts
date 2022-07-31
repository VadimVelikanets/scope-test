import {gql} from "@apollo/client";

export const FETCH_USERS = gql`
    fragment InfluencerFields on Influencer {
  id
  ig_username
  profile_pic_url
  nationality
  nationality
  ig_num_followers
  ig_engagement
  hide_new_marker
}

query fetchInfluencers(
  $querystring: String!
  $page: Int
  $fastSearch: Boolean
) {
  influencers(
    querystring: $querystring
    page: $page
    fast_search: $fastSearch
  ) {
    success
    errors
    influencers {
      ...InfluencerFields
      __typename
    }
    num_total_results
    current_page
    __typename
  }
}
`