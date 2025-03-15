export function random(len: number){

    let options = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let ans = "";
    let length = options.length;

    for(let i = 0; i < len; i++){
        ans += options[(Math.random() * length) | 0];
    }
    return ans;
}