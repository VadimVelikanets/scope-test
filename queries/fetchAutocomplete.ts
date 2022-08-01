import {gql} from "@apollo/client";

export const FETCH_AUTOCOMPLETE_MENTION = gql`
  query autocompleteMention($querystring: String!) {
  autocomplete_mention(querystring: $querystring) {
    errors
    success
    mentions
  }
}
`

export const FETCH_AUTOCOMPLETE_HASHTAG = gql`
  query autocompleteHashtag($querystring: String!) {
  autocomplete_hashtag(querystring: $querystring) {
    errors
    success
    hashtags
  }
}
`

export const FETCH_AUTOCOMPLETE_USERNAME = gql`query autocomplete($querystring: String!, $tagId: ID) {
  autocomplete(querystring: $querystring, tag_id: $tagId) {
    errors
    success
    influencers {
      ig_username
      profile_pic_url
      full_name
    }
  }
}`