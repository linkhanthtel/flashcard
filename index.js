const app = Vue.createApp({
    data() {
        return {
            words: [
                {
                    wordA: 'hello',
                    wordB: 'bonjour',
                    answer: '',
                    correct: false
                },
                {
                    wordA: 'thanks',
                    wordB: 'merci',
                    answer: '',
                    correct: false
                },
                {
                    wordA: 'goodbye',
                    wordB: 'au revoir',
                    answer: '',
                    correct: false
                },
                {
                    wordA: 'see you soon',
                    wordB: 'a bientot',
                    answer: '',
                    correct: false
                },
                {
                    wordA: 'sorry',
                    wordB: 'dezole',
                    answer: '',
                    correct: false
                },
                {
                    wordA: 'hot',
                    wordB: 'chaud',
                    answer: '',
                    correct: false
                },
            ],
            correctCount: 0,
            completed: false
        }
    },
    watch: {
        correctCount() {
            if (this.correctCount == this.wordCount) {
                this.completed = true; 
                // this.completed = this.correctCount == this.wordCount;
            }
        }
    },
    methods: {
        checkAnswer(word) {
            word.correct = word.wordB == word.answer;

            if(word.correct) {
                this.correctCount++;
            }
        }
    },
    computed: {
        shuffleWords() {
            return this.words.sort(() => .5 - Math.random());
        },
        wordCount() {
            return this.words.length;
        }
    }
})

app.mount('#app')