import {i18n} from '@/plugins/i18n'

export default {
  functional: true,
  render(createElement) {
    return [
      createElement('span', {staticClass: 'qtum-icon qtum-icon--qtum'}),
      i18n.t('misc.rich_list_title')
    ]
  }
}
