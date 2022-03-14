var defaultThreads = [
    {
        id: 1,
        title: "Introduction",
        author: "Jay",
        date: Date.now(),
        content: "JSKAHDUIASIKHUDIUASKDHAIUKDHAIUKJ",
        comments: [
            {
                author: "Jay",
                date: Date.now(),
                content: "Hey there, I'm jay!"
            }
        ]
    },
    {
        id: 2,
        title: "How to use this Forum",
        author: "Jay",
        date: Date.now(),
        content: "JSKAHDUIASIKHUDIUASKDHAIUKDHAIUKJ",
        comments: [
            {
                author: "Jay",
                date: Date.now(),
                content: "Use the add thread button on the main page to add a new thread, clicking on a thread will allow you to reply to the thread"
            }
        ]
    }
    
]
var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}