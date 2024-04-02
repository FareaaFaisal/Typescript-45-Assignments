/* Q15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list */

var Guest_list = ["Hong Joshua", "Kim Mingyu", "Kwon Soonyoung", "Park Hyungsik", "Jeon Jungkook"];
//index number         0               1               2                3                4

console.log("Due to some personal reasons , Mr. ".concat(Guest_list[2], " cannot attend my dinner party"));
Guest_list[2] = "Song Joongki";

console.log("New list of Guests: ");
console.log(Guest_list[0] + "," + "I would be anxiously waiting for you to join the dinner tonight");
console.log(Guest_list[1] + "," + "I would be anxiously waiting for you to join the dinner tonight");
console.log(Guest_list[2] + "," + "I would be anxiously waiting for you to join the dinner tonight");
console.log(Guest_list[3] + "," + "I would be anxiously waiting for you to join the dinner tonightt");
console.log(Guest_list[4] + "," + "I would be anxiously waiting for you to join the dinner tonight");
