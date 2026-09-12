import React from 'react'
import Usercards from '../pages/Usercards'
import { User2 } from 'lucide-react'
function UserCard() {
  return (
    <div>
      <Usercards
      name="winifred"
      age={34}
      icon={User2}
      />
    </div>
  )
}

export default UserCard
