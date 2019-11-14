import http from './http'

export const getMedia = id => {
  const url = '/data/work/workDetail/' + id
  return http(url, 'GET')
}
