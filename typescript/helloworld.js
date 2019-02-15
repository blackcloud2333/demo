// 0：拼团失败，1：拼团成功，2：符合参加活动的资格，3：已经参加活动
if(user.length === 5) {
    groupState = 1
    return;
}
if(serverTime>endTime) {
    groupState = 0;
    return ;
}
if (users.length < 5) {
    this.groupState = joinedGroup == '0' ? 2 : 3;
    return
}

