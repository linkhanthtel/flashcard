<script>
export default {
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
        },
    }
};

</script>

<template>
    <div id='header'>
        <h1>Flash Card</h1>
        <p v-if="completed">Nice! You have completed all the words!</p>
        <p v-else>You have answered {{ correctCount }} out of {{ wordCount }}</p>
    </div>
    <div id="cards">
        <div 
            class="card" 
            v-for="word in shuffleWords" 
            v-bind:class="{ correct : word.correct}">
            {{ word.wordA }}
            <input v-if="!word.correct" type="text" id="input" v-model="word.answer" v-on:keyup.enter="checkAnswer(word)">
            <p v-else>{{ word.answer }}</p>
        </div>
    </div>
</template>

<style scoped>
body {
    text-align: center;
}

#header {
    text-align: center;
}

#cards {
    justify-content: center;
    display: grid;
    grid-template-columns: 300px 300px 300px;
    grid-gap: 30px;
}

.card {
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
    border-radius: 10px;
}

#input {
    margin: 10px;
}

.correct {
    background-color: lightgreen;
    margin: 0;
}
</style>
