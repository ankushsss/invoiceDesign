// ** Mock Adapter
import mock from 'src/@fake-db/mock'

const icons = [{ icon: 'rocket' }, { icon: 'atom' }, { icon: 'crown' }, { icon: 'cricket-ball' }, { icon: 'aperture' }]
mock.onGet('/api/icons/data').reply(() => {
  return [200, icons]
})
