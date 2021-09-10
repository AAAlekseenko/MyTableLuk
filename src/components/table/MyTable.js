import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {useMemo} from "react";
import './MyTable.scss'
const columns = [
  {
    field: 'date',
    headerName: 'Дата',
    width: 300,
    sortable: false,
  },
  {
    field: 'theme',
    headerName: 'Тема',
    width: 400,
    sortable: false,
  },
  {
    field: 'orderType',
    headerName: 'Вид поручения',
    width: 200,
    sortable: false,
  },
  {
    field: 'completeDate',
    headerName: 'Дата завершения',
    width: 250,
    sortable: false,
  },
  {
    field: 'author',
    headerName: 'Автор',
    sortable: false,
    width: 200,
  },
  {
    field: 'periodDate',
    headerName: 'Срок исполнения',
    sortable: false,
    width: 270,
  },
];

const rows = [
  {id: 1, theme: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cum eligendi enim esse in inventore ipsa ipsam ipsum, modi molestiae nesciunt nihil non possimus, quas qui tempore ullam vero.', date: 'Сегодня', orderType: 'Первый тип', completeDate: 'Сегодня', author: 'Вася', periodDate: 'Сегодня' },
  {id: 2, theme: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cum eligendi enim esse in inventore ipsa ipsam ipsum, modi molestiae nesciunt nihil non possimus, quas qui tempore ullam vero.', date: 'Точно сегодня', orderType: 'Первый тип', completeDate: 'Завтра', author: 'Слава', periodDate: 'Завтра' },
  {id: 3, theme: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cum eligendi enim esse in inventore ipsa ipsam ipsum, modi molestiae nesciunt nihil non possimus, quas qui tempore ullam vero.', date: '100% сегодня', orderType: 'Второй тип', completeDate: 'Сегодня', author: 'Петя', periodDate: 'Сегодня' },
  {id: 4, theme: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cum eligendi enim esse in inventore ipsa ipsam ipsum, modi molestiae nesciunt nihil non possimus, quas qui tempore ullam vero.', date: 'Сегодня', orderType: 'Первый тип', completeDate: 'Сегодня', author: 'Вася', periodDate: 'Сегодня' },
  {id: 5, theme: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cum eligendi enim esse in inventore ipsa ipsam ipsum, modi molestiae nesciunt nihil non possimus, quas qui tempore ullam vero.', date: 'Точно сегодня', orderType: 'Третий тип', completeDate: 'Завтра', author: 'Слава', periodDate: 'Завтра' },
  {id: 6, theme: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cum eligendi enim esse in inventore ipsa ipsam ipsum, modi molestiae nesciunt nihil non possimus, quas qui tempore ullam vero.', date: 'Сегодня', orderType: 'Первый тип', completeDate: 'Сегодня', author: 'Вася', periodDate: 'Сегодня' },
  {id: 7, theme: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cum eligendi enim esse in inventore ipsa ipsam ipsum, modi molestiae nesciunt nihil non possimus, quas qui tempore ullam vero.', date: 'Сегодня', orderType: 'Второй тип', completeDate: 'Никогданибудь', author: 'Петя', periodDate: 'Вчера' },
  {id: 8, theme: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cum eligendi enim esse in inventore ipsa ipsam ipsum, modi molestiae nesciunt nihil non possimus, quas qui tempore ullam vero.', date: '100% сегодня', orderType: 'Третий тип', completeDate: 'Сегодня', author: 'Вася', periodDate: 'Сегодня' },
  {id: 9, theme: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cum eligendi enim esse in inventore ipsa ipsam ipsum, modi molestiae nesciunt nihil non possimus, quas qui tempore ullam vero.', date: 'Сегодня', orderType: 'Первый тип', completeDate: 'Сегодня', author: 'Вася', periodDate: 'Сегодня' },
  {id: 10, theme: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cum eligendi enim esse in inventore ipsa ipsam ipsum, modi molestiae nesciunt nihil non possimus, quas qui tempore ullam vero.', date: 'Точно сегодня', orderType: 'Первый тип', completeDate: 'Сегодня', author: 'Вася', periodDate: 'Вчера' },
  {id: 11, theme: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cum eligendi enim esse in inventore ipsa ipsam ipsum, modi molestiae nesciunt nihil non possimus, quas qui tempore ullam vero.', date: 'Сегодня', orderType: 'Второй тип', completeDate: 'Завтра', author: 'Петя', periodDate: 'Завтра' },
  {id: 12, theme: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cum eligendi enim esse in inventore ipsa ipsam ipsum, modi molestiae nesciunt nihil non possimus, quas qui tempore ullam vero.', date: 'Точно сегодня', orderType: 'Первый тип', completeDate: 'Никогданибудь', author: 'Слава', periodDate: 'Вчера' },
];

export default function MyTable(props) {
  const { filterSetting } = props;
  const filteredArray = useMemo(() => {
    return rows.filter((elem) => {
      return elem.date.includes(filterSetting.date)
        && elem.orderType.includes(filterSetting.orderType)
        && elem.completeDate.includes(filterSetting.completeDate)
        && elem.author.includes(filterSetting.author)
        && elem.periodDate.includes(filterSetting.periodDate)
    })
  },[filterSetting])

  return (
    <div style={{ height: '60vh', width: '100%' }}>
      <DataGrid
        rows={filteredArray}
        columns={columns}
        hideFooter={true}
        checkboxSelection
        hideFooterPagination={true}

      />
    </div>
  );
}
