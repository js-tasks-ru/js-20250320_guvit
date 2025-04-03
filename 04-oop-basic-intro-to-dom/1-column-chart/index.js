export default class ColumnChart {

  element;
  chartHeight = 50;
  //data;

  constructor(props = {}) {

    const {
      data = [],
      label = '',
      value = 0,
      link = '',
      formatHeading = (value) => value,
    } = props;

    this.data = data;
    this.label = label;
    this.value = value;
    this.link = link;
    this.formatHeading = formatHeading;

    //
    this.element = this.createElement();
  }

  createLinkTemplate(){
    if (this.link) {
      return `<a class="column-chart__link" href="${this.link}">View all</a>`;
    }
    return '';
  }

  getColumnProps(data) {
    const maxValue = Math.max(...data);
    const scale = 50 / maxValue;

    return data.map(item => {
      return {
        percent: (item / maxValue * 100).toFixed(0) + '%',
        value: String(Math.floor(item * scale))
      };
    });
  }

  createChartTemplate(){
    return this.getColumnProps(this.data).map(({value, percent}) => (
      `<div style="--value: ${value}" data-tooltip="${percent}"></div>`
    )).join('');
  }

  createTemplate(){
    return `
      <div class="column-chart" style="--chart-height: 50">
      <div class="column-chart__title">
        ${this.label}
        ${this.createLinkTemplate()}
      </div>
      <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">
        ${this.formatHeading(this.value)}
        </div>
        <div data-element="body" class="column-chart__chart">
        ${this.createChartTemplate()}


          <!--<div style="&#45;&#45;value: 16" data-tooltip="33%"></div>
          <div style="&#45;&#45;value: 8" data-tooltip="17%"></div>
          <div style="&#45;&#45;value: 33" data-tooltip="67%"></div>
          <div style="&#45;&#45;value: 14" data-tooltip="29%"></div>
          <div style="&#45;&#45;value: 6" data-tooltip="13%"></div>
          <div style="&#45;&#45;value: 25" data-tooltip="50%"></div>
          <div style="&#45;&#45;value: 8" data-tooltip="17%"></div>
          <div style="&#45;&#45;value: 6" data-tooltip="13%"></div>
          <div style="&#45;&#45;value: 18" data-tooltip="38%"></div>
          <div style="&#45;&#45;value: 50" data-tooltip="100%"></div>
          <div style="&#45;&#45;value: 41" data-tooltip="83%"></div>
          <div style="&#45;&#45;value: 35" data-tooltip="71%"></div>
          <div style="&#45;&#45;value: 41" data-tooltip="83%"></div>
          <div style="&#45;&#45;value: 4" data-tooltip="8%"></div>
          <div style="&#45;&#45;value: 2" data-tooltip="4%"></div>-->
        </div>
      </div>
    </div>
    `
  }


  createElement(){
    const element = document.createElement('div');

    element.innerHTML = this.createTemplate();

    const firstElementChild = element.firstElementChild;

    firstElementChild.classList.add('column-chart_loading');

    return firstElementChild;
  }

  update(newData) {
    this.data = newData;

    this.element.innerHTML = this.createTemplate();
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }

  /*{
      data: ordersData,
      label: 'orders',
      value: 344,
      link: '#',
    }*/

}
