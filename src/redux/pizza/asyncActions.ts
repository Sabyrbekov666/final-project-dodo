import { Pizza, SearchPizzaParams } from './types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import identity from 'lodash/identity'
import pickBy from 'lodash/pickBy'

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
	'pizza/fetchPizzasStatus',
	async params => {
		const { sortBy, order, category, search, currentPage } = params
		console.log(params, 4444)
		const { data } = await axios.get<Pizza[]>(
			`https://6395968090ac47c6806e5eec.mockapi.io/items`,
			{
				params: pickBy(
					{
						page: currentPage,
						limit: 10,
						category,
						sortBy,
						order,
						search,
					},
					identity
				),
			}
		)

		return data
	}
)
