// const isValidUserId = (userList, user) => {
//     userList.indexOf(user >= 0)
// }
// module.exports = isValidUserId

export default function isValidUserId(userList, user) {
    return userList.indexOf(user) >= 0
}
