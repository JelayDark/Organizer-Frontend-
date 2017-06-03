import React, {Component} from 'react';

export default class Toolbar extends Component {
  constructor(props) {
    super(props);
    // this.sorted = {age:true, name:true};
    this.sorted = {company:true, name:true};
  }

  sort(type) {
    //при помощи реструктуризации создаем две переменные
    const {update, data} = this.props;
    //получаем порядок сортировки
    const isSorted = this.sorted[type];
    //устанавливаем направление
    let direction = isSorted ? 1 : -1;

    //создаем новый массив из данных, чтобы не перезаписывать состояние и сортируем его

    const sorted = [].slice.call(data).sort((a,b) => {
      //чтобы сортировка всегда была одинаковой учтем все условия: функция может вернуть 0,1 или -1, в зависимости от возвращаемого значения метод массивов sort сделает свой выбор
      if(a[type]===b[type]) {return 0;}
      return a[type] > b[type] ? direction : direction*-1;
    });

    //меняем порядок сортировки
    this.sorted[type] = !isSorted;

    update({
      data:sorted,
      active: 0
    });
  }


  reset() {
    this.props.update({
      data: this.props.initialData,
      term: '',
      active: 0
    });
  }

  render() {
    return (
      <div className="toolbar">
        <button className="btn btn-default" onClick={() => this.sort('name')}>
          <i className="fa fa-sort-alpha-asc"></i> Sort by name
        </button>
        <button className="btn btn-default" onClick={() => this.sort('company')}>
          <i className="fa fa-sort-alpha-asc"></i> Sort by company
        </button>
        <button className="btn btn-default" onClick={this.reset.bind(this)}>
          <i className="fa fa-sort-alpha-asc"></i> Reset
        </button>
      </div>
    );
  }
}
