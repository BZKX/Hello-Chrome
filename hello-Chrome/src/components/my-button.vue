<template>
    <button :class="[type,pain?'pain':'']">
        <slot></slot>
    </button>
</template>

<script>
	export default {
		name: 'my-button',
		props: {
			type: {
				default: 'normal',
				type: String
			},
			pain: {
				default: true,
				type: Boolean
			}
		}
	}
</script>

<style lang="scss" scoped>
    @import "../assets/style/colorDeploy";
    button {
        box-sizing: border-box;
        padding: 10px 20px;
        letter-spacing: 1px;
        border-radius: 4px;
        border: 1px solid $normal; //自定义边框
        box-shadow: 0 0 2px $normal;
        background-color: $normal;
        outline: none; //消除默认点击蓝色边框效果
        cursor: pointer;
        color: white;
        transition: background-color .2s ease-in-out,
        box-shadow .2s ease-in-out,
        color .2s ease-in-out
    }

    .normal {
        border-color: $normal;
        box-shadow: 0 0 2px $normal;
        background-color: $normal;
        &:hover{
            background-color: $normal-hover;
            box-shadow: 0 0 4px $normal;
        }
        &:active{
            background-color: $normal;
            box-shadow: 0 0 2px $normal;
        }
    }

    .normal.pain{
        background-color: $normal-pain;
        color: $normal;
        &:hover{
            background-color: $normal;
            color: #ffffff;
            box-shadow: 0 0 4px $normal;
        }
        &:active{
            background-color: $normal-hover;
            box-shadow: 0 0 4px $normal;
        }
    }

    .success{
        border-color: $success;
        box-shadow: 0 0 2px $success;
        background-color: $success;
        &:hover{
            background-color: $success-hover;
            box-shadow: 0 0 4px $success;
        }
        &:active{
            background-color: $success;
            box-shadow: 0 0 2px $success;
        }
    }

    .success.pain{
        background-color: $success-pain;
        color: $success;
        &:hover{
            background-color: $success;
            color: #ffffff;
            box-shadow: 0 0 4px $success;
        }
        &:active{
            background-color: $success-hover;
            box-shadow: 0 0 4px $success;
        }
    }

    .error{
        border-color: $error;
        box-shadow: 0 0 2px $error;
        background-color: $error;
        &:hover{
            background-color: $error-hover;
            box-shadow: 0 0 4px $error;
        }
        &:active{
            background-color: $error;
            box-shadow: 0 0 2px $error;
        }
    }

    .error.pain{
        background-color: $error-pain;
        color: $error;
        &:hover{
            background-color: $error;
            color: #ffffff;
            box-shadow: 0 0 4px $error;
        }
        &:active{
            background-color: $error-hover;
            box-shadow: 0 0 4px $error;
        }
    }

</style>
