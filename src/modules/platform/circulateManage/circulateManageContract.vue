<template>
    <div>
        <header class="breadcrumb">所在位置：<span>流通管理</span></header>
        <div class="contractTitle">
            <h1>数据流通合约</h1>
            <p>数据提供方：<span>XXX公司</span></p>
            <p>数据需求方：<span>XXX公司</span></p>
        </div>
        <div class="contractContent">
            <div class="title"><h1>合约信息</h1></div>
            <p>数据提供方将数据以XXX形式提供给需求方数据提供方将数据以XXX形式提供给需求方数据提供方将数据以XXX形式提供给需求方数据提供方将数据以XXX形式提供给需求方数据提供方将数据以XXX形式提供给需求方</p>
            <div class="title"><h1>流通需求</h1></div>
            <p>需支付积分：<span>120</span>积分</p>
            <p>数据使用期限：<span>2018/09/09-2018/10/10</span><strong>数据到期后将自动销毁</strong></p>
            <div class="title"><h1>其他约定</h1></div>
            <p>1、租赁期间双方必须信守合约，乙方如违反本合约的规定，甲方将扣除乙方缴纳金额作为违约金并终止数据流通合约。 </p>
            <p>2、乙方擅自将数据转给他人使用，甲方有权责令停止转让行为，终止流通合约。同时甲方将扣除乙方全部积分。同是根据事态的严重性决定是否移交当地公安机关。</p>
            <p>3、本合同未尽事项，由甲、乙双方另行议定。    本合同及其附件和补充协议中未规定的事项，均遵照中华人民共和国有关法律、法规和政策执行。</p>
        </div>
        <footer class="contractFooter"><el-button size="small" type="primary">返回</el-button></footer>
    </div>
</template>

<script>
    export default {
        name: "circulate-manage-contract"
    }
</script>

<style lang="scss" scoped>
    .contractTitle{
        background-color: #fff;
        border: 1px solid #ebecf0;
        border-bottom: 2px solid #f3f7ff;
        padding: 40px 190px 0;
        h1{
            font-size: 24px;
            height: 50px;
            line-height: 50px;
            text-align: center;
        }
        p{
            font-size: 14px;
            height: 40px;
            line-height: 40px;
        }
    }
    .contractContent{
        background-color: #fff;
        border: 1px solid #ebecf0;
        border-bottom: none;
        padding: 0 190px;
        p{
            font-size: 14px;
            line-height: 30px;
            strong{
                font-weight: normal;
                margin-left: 30px;
                color: #f77f5b;
            }
        }
    }
    .contractFooter{
        background-color: #fff;
        border: 1px solid #ebecf0;
        border-top: none;
        padding: 45px 190px;
        text-align: right;
    }
</style>
