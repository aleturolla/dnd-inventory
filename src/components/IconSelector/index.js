import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'

import { ReactComponent as ChestSvg } from '../../assets/svg/002-chest.svg'
import { ReactComponent as SwordSvg } from '../../assets/svg/003-sword.svg'
import { ReactComponent as ShieldSvg } from '../../assets/svg/004-shield.svg'
import { ReactComponent as PotionSvg } from '../../assets/svg/005-potion.svg'
import { ReactComponent as StaffSvg } from '../../assets/svg/006-staff.svg'
import { ReactComponent as CoinSvg } from '../../assets/svg/011-coin.svg'
import { ReactComponent as MeatSvg } from '../../assets/svg/017-meat.svg'
import { ReactComponent as CrystalSvg } from '../../assets/svg/019-crystal.svg'
import { ReactComponent as ArmorSvg } from '../../assets/svg/023-armor.svg'
import { ReactComponent as KeySvg } from '../../assets/svg/024-key.svg'
import { ReactComponent as ScrollSvg } from '../../assets/svg/032-map.svg'
import { ReactComponent as UnknownSvg } from '../../assets/svg/046-locked.svg'
import { ReactComponent as GhostSvg } from '../../assets/svg/030-ghost.svg'

const CHEST = 'chest'
const SWORD = 'sword'
const SHIELD = 'shield'
const POTION = 'potion'
const STAFF = 'staff'
const COIN = 'coin'
const MEAT = 'meat'
const CRYSTAL = 'crystal'
const ARMOR = 'armor'
const KEY = 'key'
const SCROLL = 'scroll'
const UNKNOWN = 'unknown'
const GHOST = 'ghost'
export const TYPES = [
  CHEST,
  SWORD,
  SHIELD,
  POTION,
  STAFF,
  COIN,
  MEAT,
  CRYSTAL,
  ARMOR,
  KEY,
  SCROLL,
  UNKNOWN
]

export default class IconSelector extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf([...TYPES, GHOST])
  }
  handlerSelector = type => {
    switch (type) {
      case CHEST:
        return ChestSvg
      case SWORD:
        return SwordSvg
      case SHIELD:
        return ShieldSvg
      case POTION:
        return PotionSvg
      case STAFF:
        return StaffSvg
      case COIN:
        return CoinSvg
      case MEAT:
        return MeatSvg
      case CRYSTAL:
        return CrystalSvg
      case ARMOR:
        return ArmorSvg
      case KEY:
        return KeySvg
      case SCROLL:
        return ScrollSvg
      case UNKNOWN:
        return UnknownSvg
      case GHOST:
        return GhostSvg
      default:
        return ''
    }
  }
  render() {
    const { type, size } = this.props
    return (
      <Icon
        component={this.handlerSelector(type)}
        style={{ fontSize: size || 20 }}
      />
    )
  }
}
