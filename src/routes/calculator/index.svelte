<script lang="ts">
    import {Button} from '@src/components/calculator/button';
    import {Display} from '@src/components/calculator/display';

    const textNumbers : string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const operations : string[] = ['/', '*', '-', '+', '='];
    const controllers : string[] = ['AC', '+/-', '%'];

    let opnd: number = 0;

    let val0: number = 0;
    let val1: number = 0;
    let operator: string;

    function add(x: number): void {
        val0 = x;
        operator = '+';
        opnd = 0;
    }
    function subtract(x: number): void {
        val0 = x;
        operator = '-';
        opnd = 0;
    }
    function multiplication(x: number): void {
        val0 = x;
        operator = '*';
        opnd = 0;
    }
    function divide(x: number): void {
        val0 = x;
        operator = '/';
        opnd = 0;
    }
    function mod(x: number): void {
        val0 = x;
        operator = '%';
        opnd = 0;
    }
    function clear(): void {
        opnd = 0;
        operator = ' ';
    }
    function convert_sign(): void {
        opnd = (-1) * opnd;
    }
    function cal_result(): void {
        val1 = opnd;
        switch(operator) {
            case '+': 
                opnd = val0 + val1;
                break;
            case '-':
                opnd = val0 - val1;
                break;
            case '*':
                opnd = val0 * val1;
                break;
            case '/':
                if (val1 == 0) {
                    opnd = 0;
                } else {
                    opnd = val0 / val1;
                }
                break;
            case '%':
                opnd = val0 % val1;
                break;
            default:
                break;
        }
    }
    function update(val: number): void {
        opnd = opnd * 10 + val;
    }
</script>

<div class="frame">
    <Display result={opnd}></Display>
    <div class="btn">
        <div class="btn">
            <Button text={controllers[0]} color="dark-grey" onClick={(_) => clear()} />
            <Button text={controllers[1]} color="dark-grey" onClick={(_) => convert_sign()} />
            <Button text={controllers[2]} color="dark-grey" onClick={(_) => mod(opnd)} />
        </div>
        {#each textNumbers as text}
            <Button {text} color="grey" onClick={(value) => update(parseInt(value)) } />
        {/each}
    </div>
    <div class="btn-operation">
        <Button text={operations[0]} color="orange" onClick={(_) => divide(opnd)} />
        <Button text={operations[1]} color="orange" onClick={(_) => multiplication(opnd)} />
        <Button text={operations[2]} color="orange" onClick={(_) => subtract(opnd)} />
        <Button text={operations[3]} color="orange" onClick={(_) => add(opnd)} />
        <Button text={operations[4]} color="orange" onClick={(_) => cal_result()} />
    </div>
</div>

<style lang="scss">
    .frame {
        margin: 0 auto;
        width: 326px;
        display: flex;
        flex-wrap: wrap;
    }
    .btn {
        width: 246px;
        display: flex;
        flex-wrap: wrap;
    }
    .btn-operation {
        width: 80px;
        display: flex;
        flex-wrap: wrap;
    }
</style>