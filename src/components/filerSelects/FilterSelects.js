import React, {useEffect, useState} from "react";
import {FormControl, InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const FilterSelects = (props) => {
    const classes = useStyles();
    const [filtersState, setFiltersState] = useState({
      date: '',
      orderType: '',
      completeDate: '',
      author: '',
      periodDate: ''
    });


    const handleChange = (event) => {
      const name = event.target.name;
      setFiltersState({
        ...filtersState,
        [name]: event.target.value,
      });
    };

    useEffect(() => {
      props.updateFilter(filtersState)
    },[props, filtersState])

    return (
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="date-native-simple">Дата</InputLabel>
          <Select
            value={filtersState.date}
            onChange={handleChange}
            inputProps={{
              name: 'date',
              id: 'date',
            }}
          >
            <MenuItem value={'Сегодня'} defaultValue={filtersState.date} >Сегодня</MenuItem>
            <MenuItem value={'Точно сегодня'} defaultValue={filtersState.date} >Точно сегодня</MenuItem>
            <MenuItem value={'100% сегодня'} defaultValue={filtersState.date} >100% сегодня</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="orderType-native-simple">Вид поручения</InputLabel>
          <Select
            value={filtersState.orderType}
            onChange={handleChange}
            inputProps={{
              name: 'orderType',
              id: 'orderType',
            }}

          >
            <MenuItem value={'Первый тип'} defaultValue={filtersState.orderType} >Первый тип</MenuItem>
            <MenuItem value={'Второй тип'} defaultValue={filtersState.orderType} >Второй тип</MenuItem>
            <MenuItem value={'Третий тип'} defaultValue={filtersState.orderType} >Третий тип</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="completeDate-native-simple">Дата исполнения</InputLabel>
          <Select
            value={filtersState.completeDate}
            onChange={handleChange}
            inputProps={{
              name: 'completeDate',
              id: 'completeDate',
            }}
          >
            <MenuItem value={'Сегодня'} defaultValue={filtersState.completeDate} >Сегодня</MenuItem>
            <MenuItem value={'Завтра'} defaultValue={filtersState.completeDate} >Завтра</MenuItem>
            <MenuItem value={'Никогданибудь'} defaultValue={filtersState.completeDate} >Никогданибудь</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="author-native-simple">Автор</InputLabel>
          <Select
            value={filtersState.author}
            onChange={handleChange}
            inputProps={{
              name: 'author',
              id: 'author',
            }}
          >
            <MenuItem value={'Вася'} defaultValue={filtersState.author} >Вася</MenuItem>
            <MenuItem value={'Петя'} defaultValue={filtersState.author} >Петя</MenuItem>
            <MenuItem value={'Слава'} defaultValue={filtersState.author} >Слава</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="periodDate-native-simple">Срок исполнения</InputLabel>
          <Select
            value={filtersState.periodDate}
            onChange={handleChange}
            inputProps={{
              name: 'periodDate',
              id: 'periodDate',
            }}
          >
            <MenuItem value={'Сегодня'} defaultValue={filtersState.periodDate} >Сегодня</MenuItem>
            <MenuItem value={'Завтра'} defaultValue={filtersState.periodDate} >Завтра</MenuItem>
            <MenuItem value={'Вчера'} defaultValue={filtersState.periodDate} >Вчера</MenuItem>
          </Select>
        </FormControl>
      </div>
    )
};


export default FilterSelects
